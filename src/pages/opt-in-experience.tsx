import Head from "next/head"
import React from "react"
import Layout from "../components/Layout/layout"
import { OptInScreen } from "../screens/opt-in/opt-in-screen"

const OptInPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Opt-In Experience | MTN Mega Billion Promo</title>
      </Head>

      <OptInScreen />
    </Layout>
  );
}

export default OptInPage
