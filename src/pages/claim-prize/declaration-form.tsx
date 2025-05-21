import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout/layout";
import { DeclarationFormScreen } from "@/src/screens/claim-prize/declaration-screen/declaration-form-wrap";

const DeclarationFormPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Declaration Form | MTN Mega Billion Promo</title>
        <meta
          name="description"
          content="Claim Your Prize by Completing your Declaration form & Upload your ID below"
        />
      </Head>

      <DeclarationFormScreen />
    </Layout>
  );
};

export default DeclarationFormPage;
