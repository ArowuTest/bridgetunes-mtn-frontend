import { motion } from "framer-motion"
import React from "react"
import { pastStreams, upcomingStreams } from "./data"
import { BsCalendar } from "react-icons/bs"

export const LivestreamSchedule = () => {
  const [activeTab, setActiveTab] = React.useState("upcomingStreams")

  const renderWinners = () => {
    let scheduleToShow = []

    switch (activeTab) {
      case "upcomingStreams":
        scheduleToShow = upcomingStreams
        break
      case "pastStreams":
        scheduleToShow = pastStreams
        break
      default:
        scheduleToShow = upcomingStreams
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        {scheduleToShow.map((schedule, index) => (
          <motion.div
            key={schedule.id}
            className="bg-[#0056B3] rounded-3xl p-6 shadow-lg space-y-2 flex flex-col items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <span className="text-gray-300 text-xs font-semibold">
              {schedule.date}
            </span>
            <h4 className="bg-yellow-400 text-lg xl:text-xl text-black font-semibold py-1 px-2 rounded-lg inline-block mb-1">
              {schedule.title}
            </h4>
            <p className="text-sm font-light text-left text-gray-300 pt-2">
              {schedule.description}
            </p>
            <p className="text-xs font-semibold text-left text-gray-300 pt-2 flex gap-2 items-center">
              <BsCalendar /> {schedule.time}
            </p>
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <section className="py-16 px-4 text-center">
      <div className="flex flex-col items-center">
        <motion.div
          className="flex flex-col justify-center items-center text-left p-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200">
            Livestream Schedule
          </h2>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {["upcomingStreams", "pastStreams"].map(tab => (
            <span
              key={tab}
              className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-light transition-all duration-300 cursor-pointer text-xs md:text-sm ${
                activeTab === tab
                  ? "text-yellow-500 font-semibold border-b-2 border-b-yellow-500"
                  : "text-gray-400 hover:text-gray-300 border-b-2 border-b-transparent"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "upcomingStreams"
                ? "Upcoming Livestreams"
                : "Past Livestreams"}
            </span>
          ))}
        </motion.div>

        <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto py-8 px-6">
          {renderWinners()}
        </div>
      </div>
    </section>
  )
}
