import Head from "next/head"
import React from "react"
import Layout from "../components/Layout/layout"
import { ClaimPrizeScreen } from "../screens/claim-prize/claim-prize"

const ClaimPrizePage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Claim Prize | MTN One Billion MAD Promo</title>
        <meta
          name="description"
          content="Here's how to claim your prize on the MTN One Billion MAD Promo."
        />
      </Head>

      <ClaimPrizeScreen />
    </Layout>
  );
}

export default ClaimPrizePage
