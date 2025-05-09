import { motion } from "framer-motion"
import { PriceStructureTable } from "./price-structure-table"
import { WinnerStructureTable } from "./winner-structure-table"

export const HowWeSelectWinners = () => {
  return (
    <section className="py-16 px-6 bg-[#090F21] text-center">
      <motion.div
        className="flex flex-col justify-center items-center text-left p-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-200">
          How We Select Winners
        </h2>

        <p className="text-white/70 text-sm md:text-md text-center max-w-4xl">
          Winners are selected through a cryptographic secure and fair random
          selection. The more you top up your MTN line, the more points you
          earn, and the higher your chances of winning!. The points determine
          how many times your MTN number is entered into a draw.
          <br />
          <br />
          <span>
            Here's how points are allocated. Each N100 recharge gives 1 point,
            see example table below.
          </span>
        </p>
      </motion.div>

      <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto py-8 px-6">
        <WinnerStructureTable />
      </div>
    </section>
  );
}
