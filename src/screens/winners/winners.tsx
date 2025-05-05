import { motion } from "framer-motion"
import { WinnersHero } from "./winners-hero"
import { WinnersList } from "./winners-list"
import { HowWeSelectWinners } from "../about/how-we-select-winners"
import { JoinOurWinners } from "./join-our-winners"
import { WinnersTabDisplay } from "./winners-tab-display"

export const WinnersScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <WinnersHero />
      <WinnersTabDisplay />
      <WinnersList />
      <HowWeSelectWinners
        header={
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-12 text-gray-200 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            How We Select Winners
          </motion.h2>
        }
      />
      <JoinOurWinners />
    </motion.div>
  )
}
