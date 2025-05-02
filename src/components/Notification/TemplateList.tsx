import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaEnvelope, FaEdit, FaTrash, FaPlay, FaPlus } from "react-icons/fa"
import {
  Card,
  CardTitle,
  Button,
  Table,
  Badge,
  Spinner,
  Alert,
  Grid,
  Col,
  Flex,
} from "../common/styles"
import { notificationAPI } from "../../network/api"
import { useNotification } from "../../contexts/NotificationContext"

interface Template {
  id: string
  name: string
  content: string
  type: string
  createdAt: string
  updatedAt: string
}

const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 1rem;
`

const TemplateContent = styled.div`
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const NoTemplatesMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.gray};
`

const TemplateList: React.FC = () => {
  const { templates, setTemplates, setSelectedTemplate } = useNotification()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<{
    type: "success" | "danger"
    text: string
  } | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  useEffect(() => {
    fetchTemplates()
  }, [])

  const fetchTemplates = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await notificationAPI.getTemplates()
      setTemplates(response.templates || [])
    } catch (error) {
      console.error("Error fetching templates:", error)
      setError("Failed to fetch templates. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (template: Template) => {
    setSelectedTemplate(template)
  }

  const handleDelete = async (id: string) => {
    setDeletingId(id)
    setMessage(null)

    try {
      await notificationAPI.deleteTemplate(id)

      // Update the templates list
      setTemplates(templates.filter(template => template.id !== id))
      setMessage({ type: "success", text: "Template deleted successfully!" })
    } catch (error) {
      console.error("Error deleting template:", error)
      setMessage({
        type: "danger",
        text: "Failed to delete template. Please try again.",
      })
    } finally {
      setDeletingId(null)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
  }

  return (
    <Card>
      <Flex justify="space-between" align="center">
        <CardTitle>Notification Templates</CardTitle>
        <Button variant="primary" onClick={() => setSelectedTemplate(null)}>
          <FaPlus style={{ marginRight: "0.5rem" }} />
          New Template
        </Button>
      </Flex>

      {message && (
        <Alert variant={message.type} style={{ marginBottom: "1rem" }}>
          {message.text}
        </Alert>
      )}

      {loading ? (
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <Spinner />
          <p>Loading templates...</p>
        </div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : templates.length === 0 ? (
        <NoTemplatesMessage>
          <FaEnvelope
            size={48}
            style={{ opacity: 0.3, marginBottom: "1rem" }}
          />
          <p>No templates found. Create your first template to get started.</p>
        </NoTemplatesMessage>
      ) : (
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Content</th>
                <th>Type</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {templates.map(template => (
                <tr key={template.id}>
                  <td>{template.name}</td>
                  <td>
                    <TemplateContent>{template.content}</TemplateContent>
                  </td>
                  <td>
                    <Badge
                      variant={
                        template.type === "winner" ? "success" : "primary"
                      }
                    >
                      {template.type}
                    </Badge>
                  </td>
                  <td>{formatDate(template.createdAt)}</td>
                  <td>
                    <Flex gap="0.5rem">
                      <Button
                        variant="secondary"
                        onClick={() => handleEdit(template)}
                        style={{ padding: "0.5rem", fontSize: "0.875rem" }}
                      >
                        <FaEdit />
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(template.id)}
                        disabled={deletingId === template.id}
                        style={{ padding: "0.5rem", fontSize: "0.875rem" }}
                      >
                        {deletingId === template.id ? <Spinner /> : <FaTrash />}
                      </Button>
                    </Flex>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      )}
    </Card>
  )
}

export default TemplateList
