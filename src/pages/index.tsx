import React from "react"
import Head from "next/head"
import LandingPage from "@/src/screens/landing-page/landing-page"
import Layout from "@/src/components/Layout/layout"

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>MTN Mega Billion Promo | Bridgetunes</title>
        <meta
          name="description"
          content="Participate in MTN Mega Billion Promo and get a chance to win amazing prizes!"
        />
      </Head>

      <LandingPage />
    </Layout>
  );
}

export default HomePage
