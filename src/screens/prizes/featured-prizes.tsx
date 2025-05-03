import { PatternBG } from "@/src/components/common/pattern-bg"
import { motion } from "framer-motion"

export const FeaturedPrizes = () => {
  return (
    <PatternBG className="px-6 py-20 md:py-28">
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-semibold mb-12 text-gray-200"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Featured Prizes
      </motion.h2>

      <motion.div
        className=" w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[75%] mx-auto flex flex-col md:flex-row gap-4 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {/* Weekday Jackpot */}
          <motion.div
            className="bg-yellow-400 rounded-3xl p-6 shadow-lg space-y-2 flex flex-col items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="bg-[#0056B3] text-lg xl:text-xl text-white font-semibold py-1 px-4 rounded-lg inline-block mb-1">
              Weekday Jackpot
            </h4>
            <h3 className="text-3xl xl:text-4xl font-black pb-3">₦1,000,000</h3>
            <p className="text-sm font-light text-left">
              Our weekday jackpot is awarded to one lucky winner in each daily
              draw from Monday to Friday. Remember, you must opt-in to be
              eligible for this prize!
            </p>
          </motion.div>

          {/* Saturday Special Jackpot */}
          <motion.div
            className="bg-yellow-400 rounded-3xl p-6 shadow-lg space-y-2 flex flex-col items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="bg-[#0056B3] text-lg xl:text-xl text-white font-semibold py-1 px-4 rounded-lg inline-block mb-1">
              Saturday Special Jackpot
            </h4>
            <h3 className="text-3xl xl:text-4xl font-black pb-3">₦3,000,000</h3>
            <p className="text-sm font-light text-left">
              Our Saturday special jackpot is three times the value of weekday
              jackpots! Don't miss your chance to win big in our weekend draws.
            </p>
          </motion.div>

          {/* Rollover Jackpots */}
          <motion.div
            className="bg-yellow-400 rounded-3xl p-6 shadow-lg space-y-2 flex flex-col items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="bg-[#0056B3] text-lg xl:text-xl text-white font-semibold py-1 px-4 rounded-lg inline-block mb-1">
              Rollover Jackpots
            </h4>
            <h3 className="text-3xl xl:text-4xl font-black pb-3">
              ₦1,000,000+
            </h3>
            <p className="text-sm font-light text-left">
              If a non-opted-in participant is selected for the jackpot, the
              prize rolls over to the next draw, potentially creating even
              larger jackpot amounts!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </PatternBG>
  )
}
