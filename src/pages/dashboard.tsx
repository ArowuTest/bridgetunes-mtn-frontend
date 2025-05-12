import Head from "next/head"
import React from "react"
import Layout from "../components/Layout/layout"
import { DashboardScreen } from "../screens/dashboard/dashboard"

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Dashboard | MTN One Billion MAD Promo</title>
      </Head>

      <DashboardScreen />
    </Layout>
  );
}

export default Dashboard
