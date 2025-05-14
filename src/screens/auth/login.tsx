import { ProductLogo } from "@/src/components/common/product-logo";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "@/src/components/common/styles";
import {
  useLoginService,
  useRequestLoginToken,
} from "@/src/network/service-hooks/auth";
import { formatPhone } from "@/src/utils/format-phone";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaArrowRight, FaPhone } from "react-icons/fa";
import styled from "styled-components";

const LoginContainer = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .danger__class {
    font-size: 0.95rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    padding: 0rem;
    margin: 1.5rem auto;

    .danger__class {
      font-size: 0.9rem;
    }
  }
`;

const CardTitle = styled.h2`
  font-size: 1.75rem;
  margin-top: 1.5rem;
  margin-bottom: 0.3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.15rem;
    margin-top: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.4rem;
  }
`;

const CardSubTitle = styled.span`
  font-size: 0.85rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.75rem;
  }
`;

const TACText = styled.p`
  font-size: 0.6rem;
  color: #666;
  margin-bottom: 0.5rem;
  text-align: left;

  b {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ResendOtpText = styled.p`
  font-size: 0.6rem;
  color: #666;
  margin-top: 0.8rem;
  margin-bottom: 0.5rem;
  text-align: left;
  font-weight: bold;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding-left: 0.5rem;
  height: 3.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 3rem;
  }
`;

const InputIcon = styled.div`
  color: ${({ theme }) => theme.colors.gray};
`;

const StyledInput = styled(Input)`
  padding-left: 1rem;
  height: 100%;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.textLight};

  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.85rem;
  }
`;

const VerifyButton = styled(Button)`
  border-radius: 0 0.3rem 0.3rem 0;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  height: 100%;
`;

const OtpContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const OtpInput = styled(Input)`
  width: 3rem;
  height: 3rem;
  text-align: center;
  font-size: 1.25rem;
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.colors.textLight};
  background-color: ${({ theme }) => theme.colors.black};
  border: 0;
`;

export const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formattedPhone, setFormattedPhone] = useState("");
  const [phoneVerificationSent, setPhoneVerificationSent] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState<string | null>(null);
  const { mutate, isLoading } = useRequestLoginToken();
  const { mutate: loginMutation, isLoading: loginLoading } = useLoginService();

  // Reset countdown when verification is sent
  useEffect(() => {
    if (phoneVerificationSent && countdown === 0) {
      setCountdown(60); // 60 seconds countdown
    }
  }, [phoneVerificationSent]);

  // Countdown timer
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0 && phoneVerificationSent) {
      // When countdown reaches 0, we don't auto-reset phoneVerificationSent
      // This allows user to enter OTP, but also allows resending
    }

    return () => clearTimeout(timer);
  }, [countdown, phoneVerificationSent]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleSendVerification = async () => {
    if (!phoneNumber || phoneNumber.length < 13) {
      setError("Please enter a valid phone number");
      return;
    }

    setError(null);

    mutate(
      { phoneNumber },
      {
        onSuccess: () => {
          setPhoneVerificationSent(true);
        },
      }
    );
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);

    if (!phoneNumber || phoneNumber.length < 13) {
      setError("Please enter a valid phone number");
      return;
    }

    if (!phoneVerificationSent) {
      setError("Please verify your phone number");
      return;
    }

    const otpValue = otp.join("");
    if (otpValue.length !== 4) {
      setError("Please enter the 4-digit verification code");
      return;
    }

    loginMutation({ phoneNumber, token: otpValue });
  };

  return (
    <LoginContainer>
      <ProductLogo />

      <CardTitle>Log In to Your Account</CardTitle>
      <CardSubTitle>Please login with your MTN Phone number</CardSubTitle>

      {error && (
        <Alert
          className="danger__class"
          variant="danger"
          style={{ marginBottom: "1.5rem" }}
        >
          {error}
        </Alert>
      )}

      <Form onSubmit={handleLogin}>
        <FormGroup>
          <Label htmlFor="phoneNumber">MTN Phone Number</Label>
          <InputGroup>
            <InputIcon>
              <FaPhone />
            </InputIcon>
            <StyledInput
              id="phoneNumber"
              type="tel"
              inputMode="numeric"
              maxLength={18}
              placeholder="+234-XXX XXXX XXX"
              value={formattedPhone}
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, "");
                const formatted = formatPhone(raw);
                setPhoneNumber(e.target.value);
                setFormattedPhone(formatted);
              }}
              disabled={phoneVerificationSent}
            />

            {!phoneVerificationSent && (
              <VerifyButton
                type="button"
                variant="primary"
                onClick={handleSendVerification}
                disabled={isLoading}
              >
                Verify
              </VerifyButton>
            )}
          </InputGroup>
        </FormGroup>

        {phoneVerificationSent && (
          <>
            <FormGroup>
              <Label>Verification Code</Label>
              <OtpContainer>
                {otp.map((digit, index) => (
                  <OtpInput
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                  />
                ))}
              </OtpContainer>
              <small style={{ color: "#666", fontSize: "10px" }}>
                Enter the 4-digit code sent to your phone
              </small>

              <ResendOtpText
                onClick={() => countdown === 0 && handleSendVerification()}
              >
                Tap here to resend OTP in {countdown}s
              </ResendOtpText>
            </FormGroup>

            <TACText>
              <b>T&C:</b> By Signing up / Logging in you have agreed to opt-in
              to the promo
            </TACText>

            <Button
              type="submit"
              variant="primary"
              disabled={isLoading}
              style={{
                width: "100%",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isLoading ? "Processing..." : "Log In / Sign Up"}
              {!isLoading && <FaArrowRight style={{ marginLeft: "0.5rem" }} />}
            </Button>
          </>
        )}
      </Form>
    </LoginContainer>
  );
};
