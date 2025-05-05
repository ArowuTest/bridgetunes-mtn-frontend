import { motion } from "framer-motion"
import { FaRegCalendar } from "react-icons/fa"
import { MdPhonelinkRing } from "react-icons/md"
import { LuTicket } from "react-icons/lu"
import { GiDiceTarget } from "react-icons/gi"

export const DashboardCountdown = () => {
  return (
    <div className="py-4 px-[15%]">
      <motion.div
        className="flex flex-col md:flex-row gap-4 py-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2>Your Next Chance to Win</h2>
        <p>Next Daily Draw:</p>
      </motion.div>
    </div>
  )
}
