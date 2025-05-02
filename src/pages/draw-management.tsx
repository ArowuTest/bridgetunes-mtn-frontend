import React, { useState, useEffect } from "react"
import Head from "next/head"
import styled from "styled-components"
import Layout from "../components/Layout/layout"
import DrawSelector from "../components/DrawManagement/DrawSelector"
import DrawHistory from "../components/DrawManagement/DrawHistory"
import { Grid, Col, Alert } from "../components/common/styles"
import { useAuth } from "../contexts/AuthContext"
import { Draw } from "../../types" // Import the shared type

const DrawManagementContainer = styled.div`
  padding: 1.5rem;
`

const DrawManagement: React.FC = () => {
  const { isAuthenticated } = useAuth()
  const [selectedDraw, setSelectedDraw] = useState<Draw | null>(null)
  const [draws, setDraws] = useState<Draw[]>([])

  useEffect(() => {
    const fetchDraws = async () => {
      // Updated mock data with required fields
      const mockDraws: Draw[] = [
        {
          id: "1",
          name: "Daily Draw",
          date: "2024-04-08",
          type: "daily",
          eligibleDigits: [2, 3],
          amount: 5000000,
          status: "scheduled",
          scheduledDate: "2024-04-08T12:00:00Z",
        },
        {
          id: "2",
          name: "Weekly Mega Draw",
          date: "2024-04-12",
          type: "weekly",
          eligibleDigits: [0, 1, 2, 3, 4],
          amount: 10000000,
          status: "scheduled",
          scheduledDate: "2024-04-12T12:00:00Z",
        },
      ]
      setDraws(mockDraws)
    }

    fetchDraws()
  }, [])

  if (!isAuthenticated) {
    return (
      <Layout>
        <DrawManagementContainer>
          <Alert variant="warning">
            Please log in to access the draw management page.
          </Alert>
        </DrawManagementContainer>
      </Layout>
    )
  }

  return (
    <Layout>
      <Head>
        <title>Draw Management | MTN MyNumba Don Win</title>
      </Head>

      <DrawManagementContainer>
        <Grid>
          <Col span={5}>
            <DrawSelector
              draws={draws}
              selectedDraw={selectedDraw}
              onSelectDraw={draw => setSelectedDraw(draw)}
            />
          </Col>
          <Col span={7}>
            <DrawHistory selectedDraw={selectedDraw} />
          </Col>
        </Grid>
      </DrawManagementContainer>
    </Layout>
  )
}

export default DrawManagement
