import Head from "next/head"
import React from "react"
import Layout from "../components/Layout/layout"
import { AboutScreen } from "../screens/about/about-screen"

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>About | MTN Mega Billion Promo</title>
        <meta
          name="description"
          content="Learn about the MTN Mega Billion Promo, how it works, and the team behind it."
        />
      </Head>

      <AboutScreen />
    </Layout>
  );
}

export default AboutPage
