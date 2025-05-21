import Head from "next/head"
import Layout from "../components/Layout/layout"
import { PrizesScreen } from "../screens/prizes/prizes"

const PrizesPage = () => {
  return (
    <Layout>
      <Head>
        <title>Prizes | MTN Mega Billion Promo</title>
      </Head>

      <PrizesScreen />
    </Layout>
  );
}

export default PrizesPage
