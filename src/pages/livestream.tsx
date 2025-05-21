import Head from "next/head"
import React from "react"
import Layout from "../components/Layout/layout"
import { LivestreamScreen } from "../screens/livestream/livestream"

const LivestreamPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Livestream | MTN Mega Billion Promo</title>
        <meta
          name="description"
          content="Watch live draws for the MTN Mega Billion Promo and see winners selected in real-time."
        />
      </Head>

      <LivestreamScreen />
    </Layout>
  );
}

export default LivestreamPage
