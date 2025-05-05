import { useState } from "react"
import { GiTrophyCup } from "react-icons/gi"
import { motion } from "framer-motion"

export function CalendarDetail() {
  const [currentMonth, setCurrentMonth] = useState("January 2023")
  const [selectedDate, setSelectedDate] = useState(1)

  // This would normally come from an API or prop
  const currentDisplayDate = "January 01, 2025"

  // Calendar data - normally would be generated dynamically
  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

  // Create a calendar grid with special styling for different days
  // In a real app, this would be generated dynamically based on the month
  const getDayClass = (day: any) => {
    // Base classes for all days
    let classes = "w-10 h-10 rounded flex items-center justify-center text-sm"

    // Default day styling
    if (day === 0) {
      return `${classes} opacity-0` // Empty cell
    } else {
      classes += " bg-gray-700 text-white"
    }

    // Special days
    if (day === 1) {
      classes = `${classes} bg-green-600` // Today
    } else if ([11, 18].includes(day)) {
      classes = `${classes} bg-blue-600` // Special event
    } else if ([22].includes(day)) {
      classes = `${classes} bg-pink-500` // Other special event
    } else if ([20, 22, 24].includes(day)) {
      classes = `${classes} bg-yellow-400 text-black` // Daily draw
    }

    // Selected day
    if (day === selectedDate) {
      classes += " ring-2 ring-yellow-400 ring-offset-2 ring-offset-gray-800"
    }

    return classes
  }

  // Generate calendar days
  const days = [
    0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 0,
  ]

  return (
    <div className="bg-[#090F21] rounded-lg shadow-xl w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto overflow-hidden mt-12 py-10 px-4 md:px-14">
      <motion.div
        className="flex flex-col md:flex-row gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Calendar Section */}
        <motion.div
          className="p-4 md:p-6 bg-black md:w-1/2 rounded-md"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button className="text-gray-400 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <span className="text-white font-medium">{currentMonth}</span>
            <button className="text-gray-400 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-1 mb-1">
            {daysOfWeek.map((day, index) => (
              <div
                key={index}
                className="w-10 h-10 flex items-center justify-center text-sm font-medium text-gray-400 bg-blue-600 rounded"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => (
              <button
                key={index}
                className={getDayClass(day)}
                onClick={() => day > 0 && setSelectedDate(day)}
                disabled={day === 0}
              >
                {day > 0 ? day : ""}
              </button>
            ))}
          </div>

          {/* Calendar Legend */}
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center text-xs text-gray-400">
              <div className="w-3 h-3 bg-green-600 rounded-full mr-1"></div>
              <span>Today</span>
            </div>
            <div className="flex items-center text-xs text-gray-400">
              <div className="w-3 h-3 bg-yellow-400 rounded-full mr-1"></div>
              <span>Daily Draw</span>
            </div>
            <div className="flex items-center text-xs text-gray-400">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-1"></div>
              <span>Saturday Special Draw</span>
            </div>
            <div className="flex items-center text-xs text-gray-400">
              <div className="w-3 h-3 bg-blue-600 rounded-full mr-1"></div>
              <span>Upcoming Draw</span>
            </div>
          </div>
        </motion.div>

        {/* Prize Information Section */}
        <motion.div
          className="p-2 md:p-8 md:w-1/2"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="text-green-500 font-light text-left mb-4">
            {currentDisplayDate}
          </p>

          <div className="bg-gradient-to-r from-[#101935] to-[#090F21] px-4 md:px-10 py-6 rounded-lg">
            <h3 className="text-yellow-500 text-left text-2xl font-bold mb-6">
              Daily Prize
            </h3>

            <div className="space-y-4">
              {/* Jackpot Winner */}
              <div className="flex items-center">
                <div className="mr-2 md:mr-4">
                  <GiTrophyCup className="text-yellow-500 text-lg" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div className="flex flex-col items-start">
                      <p className="font-medium text-white">Jackpot Winner</p>
                      <p className="text-gray-400 text-sm">080*****430</p>
                    </div>
                    <p className="text-yellow-400 text-sm font-semibold">
                      ₦1,000,000
                    </p>
                  </div>
                </div>
              </div>

              {/* 2nd Prize */}
              <div className="flex items-center">
                <div className="mr-2 md:mr-4">
                  <GiTrophyCup className="text-gray-400 text-lg" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div className="flex flex-col items-start">
                      <p className="font-medium text-white/70">2nd Prize</p>
                      <p className="text-gray-400 text-sm">080*****430</p>
                    </div>
                    <p className="text-yellow-400 text-sm font-light">
                      ₦350,000
                    </p>
                  </div>
                </div>
              </div>

              {/* 3rd Prize */}
              <div className="flex items-center">
                <div className="mr-2 md:mr-4">
                  <GiTrophyCup className="text-amber-600 text-lg" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div className="flex flex-col items-start">
                      <p className="font-medium text-white/70">3rd Prize</p>
                      <p className="text-gray-400 text-sm">080*****430</p>
                    </div>
                    <p className="text-yellow-400 text-sm font-light">
                      ₦150,000
                    </p>
                  </div>
                </div>
              </div>

              {/* Consolation Prizes */}
              <div className="flex items-center">
                <div className="mr-2 md:mr-4">
                  <GiTrophyCup className="text-amber-800 text-lg" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div className="flex flex-col items-start">
                      <p className="font-medium text-white/70">
                        Consolation Prizes
                      </p>
                    </div>
                    <p className="text-yellow-400 text-sm font-light">
                      7 x ₦75,000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Entry information */}
            <p className="text-yellow-500 text-sm text-left mt-4 font-bold">
              You Had 4 Entries In This Draw
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
