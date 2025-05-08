import { useState } from "react"
import { GiTrophyCup } from "react-icons/gi"
import { motion } from "framer-motion"
import { Calendar } from "@/components/ui/calendar"
import { useAuth } from "@/src/contexts/AuthContext"

type PrizeInfo = {
  jackpot: number
  second: number
  third: number
  consolation: { count: number; amount: number }
}

// Define your prize rules:
const DAILY_PRIZES: PrizeInfo = {
  jackpot: 5_000_000,
  second: 3_000_000,
  third: 1_500_000,
  consolation: { count: 7, amount: 500_000 },
}
const SATURDAY_PRIZES: PrizeInfo = {
  jackpot: 10_000_000,
  second: 5_000_000,
  third: 3_000_000,
  consolation: { count: 7, amount: 1_000_000 },
}

export function CalendarDetail() {
  const { isAuthenticated } = useAuth()
  const today = new Date()
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(today)

  // Determine if the selected date is a Saturday
  const isSaturday = selectedDate?.getDay() === 6

  // Choose the appropriate prize structure
  const prizes = isSaturday ? SATURDAY_PRIZES : DAILY_PRIZES

  // Format the selected date for display
  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString("en-NG", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Select a date"

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
          <div className="py-6 px-12 max-w-lg mx-auto">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
              modifiers={{
                saturday: date => date.getDay() === 6,
              }}
              modifiersClassNames={{
                saturday: "bg-pink-500",
                today: "bg-green-600 text-white",
              }}
            />
          </div>

          {/* Calendar Legend */}
          <div className="mt-4 flex flex-wrap justify-center gap-4">
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
            {formattedDate}
          </p>

          <div className="bg-gradient-to-r from-[#101935] to-[#090F21] px-4 md:px-10 py-6 rounded-lg">
            <h3 className="text-yellow-500 text-left text-2xl font-bold mb-6">
              {isSaturday ? "Saturday Special Draw" : "Daily Prize"}
            </h3>

            <div className="space-y-4">
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
                      ₦{prizes.jackpot.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

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
                      ₦{prizes.second.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

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
                      ₦{prizes.third.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

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
                      {prizes.consolation.count} x ₦
                      {prizes.consolation.amount.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Entry information */}
            {isAuthenticated && (
              <p className="text-yellow-500 text-sm text-left mt-4 font-bold">
                You Had 4 Entries In This Draw
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
