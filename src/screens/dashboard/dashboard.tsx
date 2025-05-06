import { motion } from "framer-motion"
import { DashboardDataInfo } from "./dashboard-data-info"
import { DashboardGraphInfo } from "./dashboard-graph-info"
import { DashboardCountdown } from "./dashboard-countdown"
import { DashboardNotificationCenter } from "./dashboard-notification-center"

export const DashboardScreen = () => {
  return (
    <motion.div
      className="bg-black px-4 md:px-[10%] py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200">
          Dashboard
        </h2>
      </motion.div>

      <DashboardDataInfo />
      <DashboardGraphInfo />
      <DashboardCountdown />
      <DashboardNotificationCenter />
    </motion.div>
  )
}
