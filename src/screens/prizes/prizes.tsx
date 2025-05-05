import { PatternBG } from "@/src/components/common/pattern-bg"
import { motion } from "framer-motion"
import { PriceStructure } from "./price-structure"
import { HowWeSelectWinners } from "./how-we-select-winners"
import { PriceDisbursement } from "./price-disbursement"
import { FeaturedPrizes } from "./featured-prizes"

export const PrizesScreen = () => {
  return (
    <div>
      <PatternBG className="px-6 py-20 md:py-28">
        <motion.div
          className="bg-[#2C73DB] rounded-lg w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto flex flex-col md:flex-row gap-4 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full md:w-[40%] flex justify-center items-center"
            initial={{ x: "-20%", opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          >
            <img
              src="/images/prices-bg.png"
              alt="MyNumber Don Win"
              className="w-full md:w-full h-auto object-contain"
            />
          </motion.div>

          <motion.div
            className="flex flex-col text-left w-full md:w-[60%] p-8"
            initial={{ x: "20%", opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-white font-bold text-2xl md:text-4xl">
              Prizes
            </h2>

            <p className="text-white/80 text-sm md:text-md mt-6 text-left">
              MTN MyNumba Don Win offers substantial cash prizes through our
              daily and weekly draws. Our prize structure is designed to reward
              as many participants as possible, with different prize tiers and
              special Saturday draws with even higher prize amounts.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-[#FFCC00] rounded-2xl w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto flex items-center mt-12 border-l-8 border-l-white"
          initial={{ opacity: 0, y: "-90%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-left py-2 px-8">
            <strong>Important:</strong> To be eligible for the jackpot prize,
            you must opt-in to the promotion. If a non-opted-in participant is
            selected for the jackpot, the prize rolls over to the next draw,
            increasing the potential winnings!
          </p>
        </motion.div>
      </PatternBG>

      <PriceStructure />
      <FeaturedPrizes />
      <HowWeSelectWinners />
      <PriceDisbursement />
    </div>
  )
}
