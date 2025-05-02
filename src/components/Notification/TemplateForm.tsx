import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaSave, FaTimes } from "react-icons/fa"
import {
  Card,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  Textarea,
  Alert,
  Spinner,
} from "../common/styles"
import { notificationAPI } from "../../network/api"
import { useNotification } from "../../contexts/NotificationContext"

const TemplateFormContainer = styled(Card)`
  margin-bottom: 1.5rem;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const TemplateForm: React.FC = () => {
  const { selectedTemplate, setSelectedTemplate } = useNotification()
  const [name, setName] = useState("")
  const [content, setContent] = useState("")
  const [type, setType] = useState("general")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    if (selectedTemplate) {
      setName(selectedTemplate.name)
      setContent(selectedTemplate.content)
      setType(selectedTemplate.type)
    } else {
      resetForm()
    }
  }, [selectedTemplate])

  const resetForm = () => {
    setName("")
    setContent("")
    setType("general")
    setError(null)
    setSuccess(null)
  }

  const handleCancel = () => {
    setSelectedTemplate(null)
    resetForm()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !content) {
      setError("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)
    setError(null)
    setSuccess(null)

    try {
      const templateData = {
        name,
        content,
        type,
      }

      if (selectedTemplate) {
        // Update existing template
        await notificationAPI.updateTemplate(selectedTemplate.id, templateData)
        setSuccess("Template updated successfully!")
      } else {
        // Create new template
        await notificationAPI.createTemplate(templateData)
        setSuccess("Template created successfully!")
        resetForm()
      }
    } catch (error: any) {
      console.error("Template save error:", error)
      setError(
        error.response?.data?.message ||
          "Failed to save template. Please try again."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <TemplateFormContainer>
      <CardTitle>
        {selectedTemplate ? "Edit Template" : "Create New Template"}
      </CardTitle>

      {error && (
        <Alert variant="danger" style={{ marginBottom: "1rem" }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert variant="success" style={{ marginBottom: "1rem" }}>
          {success}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Template Name*</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g., Daily Winner Notification"
            disabled={isSubmitting}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="type">Template Type*</Label>
          <Select
            id="type"
            value={type}
            onChange={e => setType(e.target.value)}
            disabled={isSubmitting}
          >
            <option value="general">General</option>
            <option value="winner">Winner</option>
            <option value="opt-in">Opt-In</option>
            <option value="opt-out">Opt-Out</option>
            <option value="reminder">Reminder</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="content">Template Content*</Label>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#666",
              marginBottom: "0.5rem",
            }}
          >
            Use {"{name}"}, {"{phone}"}, {"{amount}"}, {"{date}"} as
            placeholders for dynamic content.
          </p>
          <Textarea
            id="content"
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="e.g., Congratulations {name}! You've won {amount} in the MTN MyNumba Don Win draw on {date}."
            disabled={isSubmitting}
          />
        </FormGroup>

        <ButtonGroup>
          <Button
            variant="primary"
            type="submit"
            disabled={isSubmitting}
            style={{ flex: 1 }}
          >
            {isSubmitting ? (
              <Spinner />
            ) : (
              <>
                <FaSave style={{ marginRight: "0.5rem" }} />
                {selectedTemplate ? "Update Template" : "Save Template"}
              </>
            )}
          </Button>

          <Button
            variant="secondary"
            type="button"
            onClick={handleCancel}
            disabled={isSubmitting}
          >
            <FaTimes style={{ marginRight: "0.5rem" }} />
            Cancel
          </Button>
        </ButtonGroup>
      </Form>
    </TemplateFormContainer>
  )
}

export default TemplateForm
