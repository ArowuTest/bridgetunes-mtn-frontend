import Head from "next/head"
import React from "react"
import Layout from "../components/Layout/layout"
import { WinnersScreen } from "../screens/winners/winners"

const WinnersPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Winners | MTN MyNumba Don Win</title>
        <meta
          name="description"
          content="Meet the lucky winners of the MTN MyNumba Don Win promotion."
        />
      </Head>

      <WinnersScreen />
    </Layout>
  )
}

export default WinnersPage
