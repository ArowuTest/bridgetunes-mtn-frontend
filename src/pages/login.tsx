import AuthLayout from "@/src/components/Layout/auth-layout"
import { LoginScreen } from "@/src/screens/auth/login"
import Head from "next/head"
import React from "react"

const Login: React.FC = () => {
  return (
    <AuthLayout>
      <Head>
        <title>Login | MTN One Billion MAD Promo</title>
      </Head>

      <LoginScreen />
    </AuthLayout>
  );
}

export default Login
