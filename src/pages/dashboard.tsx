import React, { useEffect, useState } from "react"
import Head from "next/head"
import styled from "styled-components"
import Layout from "../components/Layout/layout"
import DashboardStats from "../components/Dashboard/DashboardStats"
import ActivityChart from "../components/Dashboard/ActivityChart"
import DrawDistribution from "../components/Dashboard/DrawDistribution"
import RecentWinners from "../components/Dashboard/RecentWinners"
import {
  Grid,
  Col,
  Card,
  CardTitle,
  Spinner,
  Alert,
} from "../components/common/styles"
import { useAuth } from "../contexts/AuthContext"
import { drawAPI, userAPI } from "../network/api"

const DashboardContainer = styled.div`
  padding: 1.5rem;
`

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`

interface DashboardData {
  stats: {
    totalUsers: number
    activeUsers: number
    totalTopups: number
    totalDraws: number
  }
  activityData: {
    labels: string[]
    topups: number[]
    optins: number[]
  }
  drawData: {
    dailyDraws: number
    weeklyDraws: number
  }
  recentWinners: Array<{
    id: string
    msisdn: string
    amount: number
    drawDate: string
    drawType: "daily" | "weekly"
    status: "pending" | "notified" | "claimed"
  }>
}

const Dashboard: React.FC = () => {
  const { isAuthenticated, loading: authLoading } = useAuth()
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!authLoading && isAuthenticated) {
      fetchDashboardData()
    }
  }, [authLoading, isAuthenticated])

  const fetchDashboardData = async () => {
    setLoading(true)
    setError(null)

    try {
      // In a real implementation, these would be combined into a single API call
      // For this prototype, we'll simulate separate calls

      // Get dashboard stats
      const statsResponse = await userAPI.getDashboardStats()

      // Get activity data for the chart
      const activityResponse = await userAPI.getActivityData()

      // Get draw distribution data
      const drawResponse = await drawAPI.getDrawDistribution()

      // Get recent winners
      const winnersResponse = await drawAPI.getRecentWinners()

      // Combine all data
      setDashboardData({
        stats: statsResponse.stats,
        activityData: activityResponse.data,
        drawData: drawResponse.data,
        recentWinners: winnersResponse.winners,
      })
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
      setError("Failed to load dashboard data. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // For the prototype, we'll use mock data if the API calls fail
  useEffect(() => {
    if (error) {
      setDashboardData({
        stats: {
          totalUsers: 12458,
          activeUsers: 8976,
          totalTopups: 45789,
          totalDraws: 124,
        },
        activityData: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          topups: [1200, 1900, 3000, 5000, 4000, 4500],
          optins: [500, 800, 1000, 1200, 1500, 2000],
        },
        drawData: {
          dailyDraws: 98,
          weeklyDraws: 26,
        },
        recentWinners: [
          {
            id: "1",
            msisdn: "+2348012345678",
            amount: 10000,
            drawDate: "2025-04-23T10:00:00Z",
            drawType: "daily",
            status: "notified",
          },
          {
            id: "2",
            msisdn: "+2348023456789",
            amount: 10000,
            drawDate: "2025-04-22T10:00:00Z",
            drawType: "daily",
            status: "claimed",
          },
          {
            id: "3",
            msisdn: "+2348034567890",
            amount: 100000,
            drawDate: "2025-04-20T10:00:00Z",
            drawType: "weekly",
            status: "pending",
          },
          {
            id: "4",
            msisdn: "+2348045678901",
            amount: 10000,
            drawDate: "2025-04-21T10:00:00Z",
            drawType: "daily",
            status: "notified",
          },
          {
            id: "5",
            msisdn: "+2348056789012",
            amount: 10000,
            drawDate: "2025-04-20T10:00:00Z",
            drawType: "daily",
            status: "claimed",
          },
        ],
      })
      setError(null)
    }
  }, [error])

  if (authLoading) {
    return (
      <Layout>
        <LoadingContainer>
          <Spinner />
          <p>Loading authentication...</p>
        </LoadingContainer>
      </Layout>
    )
  }

  if (!isAuthenticated) {
    return (
      <Layout>
        <DashboardContainer>
          <Alert variant="warning">
            Please log in to access the dashboard.
          </Alert>
        </DashboardContainer>
      </Layout>
    )
  }

  return (
    <Layout>
      <Head>
        <title>Dashboard | MTN MyNumba Don Win</title>
      </Head>

      <DashboardContainer>
        {loading && !dashboardData ? (
          <LoadingContainer>
            <Spinner />
            <p>Loading dashboard data...</p>
          </LoadingContainer>
        ) : (
          <>
            {error && (
              <Alert variant="danger" style={{ marginBottom: "1.5rem" }}>
                {error}
              </Alert>
            )}

            {dashboardData && (
              <>
                <DashboardStats
                  userCount={dashboardData.stats.totalUsers}
                  topupCount={dashboardData.stats.totalTopups}
                  drawCount={dashboardData.stats.totalDraws}
                  notificationCount={dashboardData.stats.activeUsers} // Using activeUsers as notificationCount
                />

                <Grid>
                  <Col span={8}>
                    <ActivityChart
                      topupData={dashboardData.activityData.topups}
                      userOptInData={dashboardData.activityData.optins}
                      labels={dashboardData.activityData.labels}
                    />
                  </Col>
                  <Col span={4}>
                    <DrawDistribution
                      dailyDraws={dashboardData.drawData.dailyDraws}
                      weeklyDraws={dashboardData.drawData.weeklyDraws}
                    />
                  </Col>
                </Grid>

                <Card style={{ marginTop: "1.5rem" }}>
                  <CardTitle>Recent Winners</CardTitle>
                  <RecentWinners winners={dashboardData.recentWinners} />
                </Card>
              </>
            )}
          </>
        )}
      </DashboardContainer>
    </Layout>
  )
}

export default Dashboard
