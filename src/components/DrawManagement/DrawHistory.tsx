import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaCalendarAlt, FaTrophy, FaCheck, FaTimes } from "react-icons/fa"
import {
  Card,
  CardTitle,
  Button,
  Table,
  Badge,
  Spinner,
  Alert,
} from "../common/styles"
import { drawAPI } from "../../network/api"
import { Draw } from "../../../types"

// ================== START: NEW ADDITIONS ==================
interface DrawHistoryProps {
  selectedDraw: Draw | null
}
// ================== END: NEW ADDITIONS ==================

// ================== START: EXISTING STYLED COMPONENTS (KEEP AS IS) ==================
const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 1rem;
`

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`

const FilterSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  min-width: 150px;
`

const DigitBadge = styled(Badge)`
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
`

const DigitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
`

const NoDrawsMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.gray};
`
// ================== END: EXISTING STYLED COMPONENTS ==================

// ================== START: EXISTING HELPER FUNCTION (KEEP AS IS) ==================
const ensureDrawsTypeCompatibility = (draws: any[]): Draw[] => {
  return draws.map(draw => {
    let safeStatus: "scheduled" | "completed" | "cancelled" = "scheduled"
    if (draw.status === "completed" || draw.status === "cancelled") {
      safeStatus = draw.status
    }

    return {
      ...draw,
      status: safeStatus,
    } as Draw
  })
}
// ================== END: EXISTING HELPER FUNCTION ==================

const DrawHistory: React.FC<DrawHistoryProps> = ({ selectedDraw }) => {
  // Added props destructuring
  // ================== START: EXISTING STATE (KEEP AS IS) ==================
  const [draws, setDraws] = useState<Draw[]>([])
  const [filteredDraws, setFilteredDraws] = useState<Draw[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [processingDrawId, setProcessingDrawId] = useState<string | null>(null)
  const [message, setMessage] = useState<{
    type: "success" | "danger"
    text: string
  } | null>(null)
  // ================== END: EXISTING STATE ==================

  // ================== START: MODIFIED USE EFFECT ==================
  useEffect(() => {
    const loadHistory = async () => {
      if (selectedDraw) {
        setLoading(true)
        setError(null)
        try {
          const response = await drawAPI.getDrawHistory(selectedDraw.id)
          setDraws(ensureDrawsTypeCompatibility(response.history || []))
        } catch (error) {
          console.error("Error fetching draw history:", error)
          setError("Failed to fetch draw history. Please try again.")
        } finally {
          setLoading(false)
        }
      }
    }

    loadHistory()
  }, [selectedDraw]) // Now depends on selectedDraw
  // ================== END: MODIFIED USE EFFECT ==================

  // ================== START: EXISTING FUNCTIONS (KEEP AS IS) ==================
  const filterDraws = () => {
    let filtered = [...draws]

    if (statusFilter !== "all") {
      filtered = filtered.filter(draw => draw.status === statusFilter)
    }

    if (typeFilter !== "all") {
      filtered = filtered.filter(draw => draw.type === typeFilter)
    }

    setFilteredDraws(filtered)
  }

  const handleStatusFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setStatusFilter(e.target.value)
  }

  const handleTypeFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeFilter(e.target.value)
  }

  const executeDraw = async (id: string) => {
    setProcessingDrawId(id)
    setMessage(null)

    try {
      await drawAPI.executeDraw(id)

      const updatedDraws = draws.map(draw =>
        draw.id === id
          ? {
              ...draw,
              status: "completed",
              executedDate: new Date().toISOString(),
            }
          : draw
      )

      setDraws(ensureDrawsTypeCompatibility(updatedDraws))
      setMessage({ type: "success", text: "Draw executed successfully!" })
    } catch (error) {
      console.error("Error executing draw:", error)
      setMessage({
        type: "danger",
        text: "Failed to execute draw. Please try again.",
      })
    } finally {
      setProcessingDrawId(null)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge variant="warning">Scheduled</Badge>
      case "completed":
        return <Badge variant="success">Completed</Badge>
      case "cancelled":
        return <Badge variant="danger">Cancelled</Badge>
      default:
        return <Badge variant="primary">Unknown</Badge>
    }
  }
  // ================== END: EXISTING FUNCTIONS ==================

  return (
    <Card>
      {/* ================== START: MODIFIED TITLE SECTION ================== */}
      <CardTitle>
        {selectedDraw ? `${selectedDraw.name} History` : "Draw History"}
      </CardTitle>

      {selectedDraw && (
        <div style={{ marginBottom: "1.5rem" }}>
          <p>
            <strong>Selected Draw:</strong> {selectedDraw.name}
          </p>
          <p>
            <strong>Type:</strong> {selectedDraw.type}
          </p>
          <p>
            <strong>Scheduled Date:</strong> {formatDate(selectedDraw.date)}
          </p>
        </div>
      )}
      {/* ================== END: MODIFIED TITLE SECTION ================== */}

      {/* ================== START: EXISTING RENDER LOGIC (KEEP AS IS) ================== */}
      {message && (
        <Alert variant={message.type} style={{ marginBottom: "1rem" }}>
          {message.text}
        </Alert>
      )}

      <FilterContainer>
        {/* ... rest of existing filter JSX ... */}
      </FilterContainer>

      {/* ... rest of existing loading/error states ... */}

      {/* ... existing table rendering logic ... */}
      {/* ================== END: EXISTING RENDER LOGIC ================== */}
    </Card>
  )
}

export default DrawHistory
