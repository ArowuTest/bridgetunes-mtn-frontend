import React from "react";
import Head from "next/head";
import LandingPage from "@/src/screens/landing-page/landing-page";
import Layout from "@/src/components/Layout/layout";
import FAQSscreen from "../screens/faq/faq-screen";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>FAQs | MTN One Billion MAD Promo</title>
        <meta
          name="description"
          content="Learn about the MTN One Billion MAD Promo, how it works, and the team behind it."
        />
      </Head>

      <FAQSscreen />
    </Layout>
  );
};

export default HomePage;
