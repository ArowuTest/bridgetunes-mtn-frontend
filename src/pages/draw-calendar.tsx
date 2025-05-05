import Head from "next/head"
import React from "react"
import Layout from "../components/Layout/layout"
import { DrawCalendarScreen } from "../screens/draw-calendar/draw-calendar"

const DrawCalendar = () => {
  return (
    <Layout>
      <Head>
        <title>Draw Calendar | MTN MyNumba Don Win</title>
      </Head>

      <DrawCalendarScreen />
    </Layout>
  )
}

export default DrawCalendar
