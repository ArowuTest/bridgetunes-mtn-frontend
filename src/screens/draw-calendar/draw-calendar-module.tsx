import { PatternBG } from "@/src/components/common/pattern-bg"
import { motion } from "framer-motion"
import { CalendarDetail } from "./calendar-detail"

export const DrawCalendarModule = () => {
  return (
    <PatternBG className="px-5 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-center text-white text-2xl sm:text-3xl xl:4xl font-semibold mb-2">
          Draw Calendar
        </h2>
        <p className="text-center text-gray-400 text-xs md:text-base capitalize">
          Select a date to see results or upcoming draw details
        </p>
      </motion.div>

      <CalendarDetail />
    </PatternBG>
  )
}
