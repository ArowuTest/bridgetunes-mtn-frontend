import { PatternBG } from "@/src/components/common/pattern-bg"
import { motion } from "framer-motion"

export const PriceDisbursement = () => {
  return (
    <PatternBG className="px-6 py-20">
      <motion.div
        className="bg-[#0056B3] rounded-3xl w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto flex flex-col md:flex-row gap-3 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col text-left w-full md:w-[60%] px-8"
          initial={{ x: "-20%", opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-white font-bold text-xl md:text-3xl">
            Prize Disbursement
          </h2>

          <p className="text-white/80 text-sm md:text-md mt-6 text-left font-light">
            All prizes are disbursed within 48 hours of the draw. Winners are
            notified via SMS, and prizes are credited directly to the winner's
            MoMo account.
          </p>

          <p className="text-white/80 text-sm md:text-md mt-6 text-left font-light">
            For large prizes (₦500,000 and above), winners may be required to
            provide additional identification for verification purposes before
            the prize is disbursed.
          </p>

          <p className="text-white/80 text-sm md:text-md mt-6 text-left font-light">
            All prizes are subject to applicable taxes and regulatory
            requirements. MTN and Bridgetunes comply with all relevant laws and
            regulations regarding prize disbursements.
          </p>
        </motion.div>

        <motion.div
          className="w-full md:w-[40%] flex justify-center items-center"
          initial={{ x: "20%", opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        >
          <img
            src="/images/price-disbursement.png"
            alt="MyNumber Don Win"
            className="w-full md:w-full h-auto object-contain"
          />
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
          <strong>Don't miss out!</strong>  Make sure you opt-in to be eligible
          for jackpot prizes. Top up your MTN line regularly to increase your
          chances of winning in our daily and weekly draws.
        </p>
      </motion.div>
    </PatternBG>
  )
}
