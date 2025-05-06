import { useState } from "react"
import { FiInfo } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
import { GiDiceTarget } from "react-icons/gi"
import { LuTicket } from "react-icons/lu"
import { MdNotificationsActive } from "react-icons/md"
import { PiMedalFill } from "react-icons/pi"

const notifications = [
  {
    type: "Recharge",
    icon: <GiDiceTarget color="#FFCC00" />,
    title: "Recharge:",
    message: "Your ₦[Amount] Recharge Earned You [X] Points!",
    time: "1 Hour Ago",
  },
  {
    type: "Draws",
    icon: <LuTicket color="#FFCC00" />,
    title: "Draw:",
    message: "The [Daily/Saturday] Draw Is Happening In [Time]!",
    time: "1 Hour Ago",
  },
  {
    type: "Wins",
    icon: <PiMedalFill color="#FFCC00" />,
    title: "Win:",
    message: "Congratulations! You've Won ₦[Amount]!",
    time: "1 Hour Ago",
  },
  {
    type: "Updates",
    icon: <MdNotificationsActive color="#FFCC00" />,
    title: "Update:",
    message: "New Feature Alert: [Feature Description]",
    time: "1 Hour Ago",
  },
]

const tabs = ["All", "Recharge", "Draws", "Wins", "Updates"]

export function DashboardNotificationCenter() {
  const [activeTab, setActiveTab] = useState("All")

  const filteredNotifications =
    activeTab === "All"
      ? notifications
      : notifications.filter(n => n.type === activeTab)

  return (
    <motion.div
      className="w-full my-10 p-4 rounded-2xl bg-gradient-to-r from-[#101935] to-[#090F21] text-white"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <h4 className="flex items-center text-white">
          Notifications Center <FiInfo className="ml-2 cursor-pointer" />
        </h4>
      </header>

      {/* Tabs */}
      <div className="flex items-center overflow-x-auto text-sm pb-2 border-b border-gray-800">
        {tabs.map(tab => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-2 md:px-3 py-1 flex-1 whitespace-nowrap transition-colors duration-3 focus:outline-none focus:ring-0 ${
              activeTab === tab
                ? "text-yellow-400 font-medium"
                : "text-gray-200 hover:text-yellow-300"
            }`}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {tab}
            {activeTab === tab && (
              <motion.span
                layoutId="underline"
                className="absolute bottom-[-8px] left-0  w-full h-[2px] bg-yellow-400 rounded-full"
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Notification List */}
      <AnimatePresence mode="wait">
        <div className="mt-4 space-y-6 text-sm">
          {filteredNotifications.map((n, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-2">
                <p className="text-yellow-400 pt-[0.15rem]">{n.icon}</p>
                <div>
                  <p className="font-bold text-gray-200">{n.title}</p>
                  <p className="text-gray-300 text-xs sm:text-md lg:text-base pt-4">
                    {n.message}
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap ml-4">
                {n.time}
              </span>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </motion.div>
  )
}
