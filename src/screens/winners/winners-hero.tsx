import { motion } from "framer-motion"
import { PatternBG } from "@/src/components/common/pattern-bg"

export const WinnersHero = () => {
  return (
    <PatternBG className="px-6 py-20 md:py-28">
      <motion.div
        className="bg-[#FFCC00] rounded-lg w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto flex flex-col md:flex-row gap-4 items-center"
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
            src="/images/winners-bg.png"
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
          <h2 className="text-black font-bold text-2xl md:text-4xl">Winners</h2>

          <p className="text-black/80 text-sm md:text-md mt-6 text-left">
            Congratulations to all the winners of the MTN MyNumba Don Win
            promotion! Every day, we select lucky MTN subscribers to receive
            amazing cash prizes. Check out our recent winners and their stories
            below.
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
          <strong>Could you be next?</strong> Make sure you opt-in to be
          eligible for jackpot prizes. Top up your MTN line regularly to
          increase your chances of winning in our daily and weekly draws.
        </p>
      </motion.div>
    </PatternBG>
  )
}
