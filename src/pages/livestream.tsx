import React, { useState } from "react"
import Head from "next/head"
import styled from "styled-components"
import { motion } from "framer-motion"
import Header from "../components/Header"
import { FaPlay, FaCalendarAlt, FaHistory, FaInfoCircle } from "react-icons/fa"

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.dark};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -0.75rem;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
  }
`

const Section = styled.section`
  margin-bottom: 3rem;
`

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.dark};
`

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.1rem;
`

const LivestreamContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;

  iframe,
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
  }
`

const VideoPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 2rem;
`

const PlayButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: scale(1.05);
  }
`

const VideoControls = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
`

const VideoInfo = styled.div`
  color: white;
`

const VideoTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
`

const VideoMeta = styled.div`
  font-size: 0.9rem;
  opacity: 0.7;
`

const VideoActions = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }
`

const ActionButton = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`

const TabContainer = styled.div`
  margin-bottom: 2rem;
`

const TabButtons = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  margin-bottom: 2rem;
  overflow-x: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: 0.5rem;
  }
`

const TabButton = styled.button<{ active: boolean }>`
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  border-bottom: 3px solid
    ${({ active, theme }) => (active ? theme.colors.primary : "transparent")};
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.gray};
  font-weight: ${({ active }) => (active ? 600 : 400)};
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const ScheduleCard = styled(motion.div)`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`

const ScheduleDate = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const ScheduleTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`

const ScheduleDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const ScheduleTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.9rem;
`

const InfoBox = styled.div`
  background-color: ${({ theme }) => `${theme.colors.light}`};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`

const LivestreamPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [isPlaying, setIsPlaying] = useState(false)

  // Mock data for upcoming livestreams
  const upcomingStreams = [
    {
      id: 1,
      title: "Daily Draw - Monday",
      date: "April 29, 2025",
      time: "7:00 PM WAT",
      description:
        "Join us for the Monday daily draw where we'll select winners for numbers ending in 0 & 1. Jackpot prize: ₦1,000,000!",
    },
    {
      id: 2,
      title: "Daily Draw - Tuesday",
      date: "April 30, 2025",
      time: "7:00 PM WAT",
      description:
        "Join us for the Tuesday daily draw where we'll select winners for numbers ending in 2 & 3. Jackpot prize: ₦1,000,000!",
    },
    {
      id: 3,
      title: "Daily Draw - Wednesday",
      date: "May 1, 2025",
      time: "7:00 PM WAT",
      description:
        "Join us for the Wednesday daily draw where we'll select winners for numbers ending in 4 & 5. Jackpot prize: ₦1,000,000!",
    },
  ]

  // Mock data for past livestreams
  const pastStreams = [
    {
      id: 4,
      title: "Saturday Special Draw",
      date: "April 26, 2025",
      time: "8:00 PM WAT",
      description:
        "Watch our Saturday special draw with a jackpot prize of ₦3,000,000! All MTN numbers were eligible for this draw.",
    },
    {
      id: 5,
      title: "Daily Draw - Friday",
      date: "April 25, 2025",
      time: "7:00 PM WAT",
      description:
        "Watch our Friday daily draw where we selected winners for numbers ending in 8 & 9. Jackpot prize: ₦1,000,000!",
    },
    {
      id: 6,
      title: "Daily Draw - Thursday",
      date: "April 24, 2025",
      time: "7:00 PM WAT",
      description:
        "Watch our Thursday daily draw where we selected winners for numbers ending in 6 & 7. Jackpot prize: ₦1,000,000!",
    },
  ]

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  const renderSchedule = () => {
    const streams = activeTab === "upcoming" ? upcomingStreams : pastStreams

    return (
      <ScheduleGrid>
        {streams.map(stream => (
          <ScheduleCard
            key={stream.id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ScheduleDate>{stream.date}</ScheduleDate>
            <ScheduleTitle>{stream.title}</ScheduleTitle>
            <ScheduleDescription>{stream.description}</ScheduleDescription>
            <ScheduleTime>
              <FaCalendarAlt />
              {stream.time}
            </ScheduleTime>
          </ScheduleCard>
        ))}
      </ScheduleGrid>
    )
  }

  return (
    <PageContainer>
      <Head>
        <title>Livestream | MTN MyNumba Don Win</title>
        <meta
          name="description"
          content="Watch live draws for the MTN MyNumba Don Win promotion and see winners selected in real-time."
        />
      </Head>

      <Header />

      <MainContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageTitle>Livestream</PageTitle>

          <Section>
            <Paragraph>
              Watch our daily and weekly draws live to see winners selected in
              real-time! All draws are conducted transparently under the
              supervision of regulatory authorities. Tune in every weekday at
              7:00 PM WAT and Saturdays at 8:00 PM WAT for our special draws.
            </Paragraph>

            <LivestreamContainer>
              <VideoContainer>
                {isPlaying ? (
                  <iframe
                    src="https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID&autoplay=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <VideoPlaceholder>
                    <PlayButton onClick={handlePlayClick}>
                      <FaPlay />
                    </PlayButton>
                    <h2>MTN MyNumba Don Win Live Draw</h2>
                    <p>Click to watch our latest live draw session</p>
                  </VideoPlaceholder>
                )}
              </VideoContainer>

              <VideoControls>
                <VideoInfo>
                  <VideoTitle>Daily Draw - Friday (April 25, 2025)</VideoTitle>
                  <VideoMeta>Live at 7:00 PM WAT</VideoMeta>
                </VideoInfo>

                <VideoActions>
                  <ActionButton>
                    <FaHistory />
                    Past Draws
                  </ActionButton>
                  <ActionButton>
                    <FaInfoCircle />
                    How It Works
                  </ActionButton>
                </VideoActions>
              </VideoControls>
            </LivestreamContainer>
          </Section>

          <Section>
            <SectionTitle>Livestream Schedule</SectionTitle>

            <TabContainer>
              <TabButtons>
                <TabButton
                  active={activeTab === "upcoming"}
                  onClick={() => setActiveTab("upcoming")}
                >
                  Upcoming Livestreams
                </TabButton>
                <TabButton
                  active={activeTab === "past"}
                  onClick={() => setActiveTab("past")}
                >
                  Past Livestreams
                </TabButton>
              </TabButtons>

              {renderSchedule()}
            </TabContainer>
          </Section>

          <Section>
            <SectionTitle>How Our Draws Work</SectionTitle>
            <Paragraph>
              Our draw process is designed to be completely fair and
              transparent. Winners are selected using a random number generator
              that picks from the pool of eligible participants. For daily
              draws, numbers are filtered based on the last digit (Monday draws
              for numbers ending in 0 & 1, Tuesday for 2 & 3, etc.).
            </Paragraph>
            <Paragraph>
              All draws are conducted under the supervision of regulatory
              authorities to ensure compliance with all applicable laws and
              regulations. Winners are notified via SMS and announced on our
              website and social media channels.
            </Paragraph>
            <Paragraph>
              For the jackpot prize, winners must have opted in to be eligible.
              If a non-opted-in participant is selected for the jackpot, the
              prize rolls over to the next draw, increasing the potential
              winnings.
            </Paragraph>
          </Section>

          <InfoBox>
            <strong>Don't miss our next draw!</strong> Set a reminder to watch
            our livestreams every weekday at 7:00 PM WAT and Saturdays at 8:00
            PM WAT. You might see your number selected as a winner!
          </InfoBox>
        </motion.div>
      </MainContent>
    </PageContainer>
  )
}

export default LivestreamPage
