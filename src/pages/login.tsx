import AuthLayout from "@/src/components/Layout/auth-layout"
import { LoginScreen } from "@/src/screens/auth/login"
import Head from "next/head"
import React from "react"

const Login: React.FC = () => {
  return (
    <AuthLayout>
      <Head>
        <title>Login | MTN MyNumba Don Win</title>
      </Head>

      <LoginScreen />
    </AuthLayout>
  )
}

export default Login
