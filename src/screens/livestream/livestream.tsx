import { motion } from "framer-motion"
import { HowWeSelectWinners } from "../about/how-we-select-winners"
import { DontMissOurNextDraw } from "./dont-miss-our-next-draw"
import { LivestreamSchedule } from "./livestream-schedule"
import { LivestreamWidget } from "./livestream-widget"

export const LivestreamScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LivestreamWidget />
      <LivestreamSchedule />
      <HowWeSelectWinners
        header={
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-12 text-gray-200 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            How Our Draws Work
          </motion.h2>
        }
      />
      <DontMissOurNextDraw />
    </motion.div>
  )
}
