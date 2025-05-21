// Update OptInForm to use the extended userAPI with email notification
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FaPhone, FaCheck, FaTimes, FaEnvelope } from "react-icons/fa"
import {
  Card,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Spinner,
} from "../common/styles"
import { extendedUserAPI } from "../../network/email"

const OptInContainer = styled(Card)`
  max-width: 500px;
  margin: 0 auto;
`

const PhoneInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

const PhonePrefix = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  border: 1px solid #ddd;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
`

const SuccessAnimation = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`

const CheckIcon = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.success};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`

const ErrorIcon = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.danger};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`

const SuccessMessage = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.success};
  margin-bottom: 1rem;
  text-align: center;
`

const ErrorMessage = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.danger};
  margin-bottom: 1rem;
  text-align: center;
`

const OptInForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const value = e.target.value.replace(/\D/g, "")
    setPhoneNumber(value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!phoneNumber || phoneNumber.length < 10) {
      setError("Please enter a valid phone number")
      return
    }

    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      // Format phone number with country code if not already included
      const formattedNumber = phoneNumber.startsWith("+")
        ? phoneNumber
        : `+234${
            phoneNumber.startsWith("0") ? phoneNumber.substring(1) : phoneNumber
          }`

      // Use the extended userAPI that includes email notification
      await extendedUserAPI.optIn(formattedNumber, email)
      setSuccess(true)
    } catch (error: any) {
      console.error("Opt-in error:", error)
      setError(
        error.response?.data?.message || "Failed to opt-in. Please try again."
      )
      setFailure(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setPhoneNumber("")
    setEmail("")
    setError(null)
    setSuccess(false)
    setFailure(false)
  }

  return (
    <OptInContainer>
      <CardTitle>Opt-In to MTN Mega Billion Promo</CardTitle>

      {!success && !failure ? (
        <>
          <p style={{ marginBottom: "1.5rem" }}>
            Enter your MTN phone number to participate in the MyNumba Don Win
            promotion. You'll be eligible for daily and weekly draws with
            chances to win amazing prizes!
          </p>

          {error && (
            <Alert variant="danger" style={{ marginBottom: "1rem" }}>
              {error}
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <PhoneInputContainer>
                <PhonePrefix>
                  <FaPhone style={{ marginRight: "0.5rem" }} />
                  +234
                </PhonePrefix>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder="8012345678"
                  maxLength={10}
                  disabled={isSubmitting}
                />
              </PhoneInputContainer>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email Address (Optional)</Label>
              <PhoneInputContainer>
                <PhonePrefix>
                  <FaEnvelope style={{ marginRight: "0.5rem" }} />
                </PhonePrefix>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
              </PhoneInputContainer>
              <small
                style={{ display: "block", marginTop: "0.5rem", color: "#666" }}
              >
                Provide your email to receive confirmation and notifications
              </small>
            </FormGroup>

            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting}
              style={{ width: "100%" }}
            >
              {isSubmitting ? <Spinner /> : "Opt-In Now"}
            </Button>
          </Form>
        </>
      ) : success ? (
        <SuccessAnimation>
          <CheckIcon
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <FaCheck />
          </CheckIcon>
          <SuccessMessage>Successfully Opted-In!</SuccessMessage>
          <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            Your phone number has been registered for the MTN One Billion MAD
            Promo promotion. You are now eligible for daily and weekly draws!
            {email && (
              <>
                <br />
                <br />A confirmation email has been sent to{" "}
                <strong>{email}</strong>.
              </>
            )}
          </p>
          <Button variant="secondary" onClick={resetForm}>
            Opt-In Another Number
          </Button>
        </SuccessAnimation>
      ) : (
        <SuccessAnimation>
          <ErrorIcon
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <FaTimes />
          </ErrorIcon>
          <ErrorMessage>Opt-In Failed</ErrorMessage>
          <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            {error ||
              "There was an error processing your request. Please try again."}
          </p>
          <Button variant="primary" onClick={resetForm}>
            Try Again
          </Button>
        </SuccessAnimation>
      )}
    </OptInContainer>
  );
}

export default OptInForm
