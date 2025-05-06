import { motion } from "framer-motion"

export const DashboardCountdown = () => {
  return (
    <div className="py-4 px-4 lg:px-[15%]">
      <motion.div
        className="bg-gradient-to-b from-[#FFCC08] to-[#FF9100] p-1.5 md:p-2 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-4 py-8 text-center items-center rounded-lg bg-gradient-to-r from-[#101935] to-[#090F21] relative">
          <h2 className="text-gray-200">Your Next Chance to Win</h2>
          <p className="text-gray-300 font-light">Next Daily Draw:</p>

          <div className="flex flex-wrap justify-center items-center gap-8 py-6">
            <div className="p-1">
              <div className="w-20 sm:w-[90px] h-20 sm:h-[80px] bg-gradient-to-b from-[#FFCC08] to-[#FF9100] p-0.5 rounded-lg">
                <div className="flex flex-col justify-center items-center text-center w-full h-full rounded-lg bg-gradient-to-r from-[#101935] to-[#090F21] flex-shrink-0 space-y-4 md:space-y-0">
                  <p className="text-xl md:text-3xl font-bold text-white">08</p>
                </div>
              </div>
              <p className="uppercase tracking-wider text-gray-600 font-semibold text-center text-xs pt-4">
                Days
              </p>
            </div>
            <div className="p-1">
              <div className="w-[90px] h-[80px] bg-gradient-to-b from-[#FFCC08] to-[#FF9100] p-0.5 rounded-lg">
                <div className="flex flex-col justify-center items-center text-center w-full h-full rounded-lg bg-gradient-to-r from-[#101935] to-[#090F21] flex-shrink-0 space-y-4 md:space-y-0">
                  <p className="text-xl md:text-3xl font-bold text-white">23</p>
                </div>
              </div>
              <p className="uppercase tracking-wider text-gray-600 font-semibold text-center text-xs pt-4">
                Hours
              </p>
            </div>
            <div className="p-1">
              <div className="w-[90px] h-[80px] bg-gradient-to-b from-[#FFCC08] to-[#FF9100] p-0.5 rounded-lg">
                <div className="flex flex-col justify-center items-center text-center w-full h-full rounded-lg bg-gradient-to-r from-[#101935] to-[#090F21] flex-shrink-0 space-y-4 md:space-y-0">
                  <p className="text-xl md:text-3xl font-bold text-white">55</p>
                </div>
              </div>
              <p className="uppercase tracking-wider text-gray-600 font-semibold text-center text-xs pt-4">
                Minutes
              </p>
            </div>
            <div className="p-1">
              <div className="w-[90px] h-[80px] bg-gradient-to-b from-[#FFCC08] to-[#FF9100] p-0.5 rounded-lg">
                <div className="flex flex-col justify-center items-center text-center w-full h-full rounded-lg bg-gradient-to-r from-[#101935] to-[#090F21] flex-shrink-0 space-y-4 md:space-y-0">
                  <p className="text-xl md:text-3xl font-bold text-white">41</p>
                </div>
              </div>
              <p className="uppercase tracking-wider text-gray-600 font-semibold text-center text-xs pt-4">
                Seconds
              </p>
            </div>
          </div>

          <div>
            <p className="text-yellow-400 text-sm md:text-lg">
              You have [X] entries in this draw!
            </p>
            <p className="capitalize text-gray-300 text-[0.65rem] md:text-xs">
              Recharge now to get more entries before the draw closes!
            </p>
          </div>

          <div className="absolute top-[30%] left-[4%]">
            <img
              src="/images/star-gold.png"
              alt="trophy"
              className="w-full object-contain"
            />
          </div>

          <div className="absolute top-[15%] right-[30%]">
            <img
              src="/images/star-yellow.png"
              alt="trophy"
              className="w-full object-contain"
            />
          </div>

          <motion.div
            className="hidden sm:block absolute bottom-4 left-2 w-10 md:w-20 lg:w-32"
            animate={{ y: [0, -10, 0, -5, 0], rotate: [0, 2, -2, 2, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.5,
            }}
          >
            <img
              src="/images/trophy.svg"
              alt="trophy"
              className="w-full object-contain"
            />
          </motion.div>

          <motion.div
            className="absolute top-[-3%] md:top-[-10%] right-[-10%] w-24 md:w-40 lg:w-80"
            animate={{ y: [0, 15, 0, -10, 0], rotate: [0, 3, -3, 3, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.8,
            }}
          >
            <img
              src="/images/falling-notes.svg"
              alt="money"
              className="w-full object-contain"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="flex gap-4 rounded-lg pt-8">
        <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg h-[150px] bg-gradient-to-r from-[#FFB830] to-[#F8951D]">
          <div className="absolute h-full inset-0 bg-[url('/images/jackpot.png')] bg-repeat-x  bg-left z-0" />

          <div className="absolute h-full inset-0 bg-gradient-to-r from-[#FFB830]/10 via-[#F8951D]/90 to-transparent z-10" />

          <div className="relative z-20 flex justify-end items-center h-full px-6 bg-gradient-to-r from-[#FFB830]/5 to-[#FF8E00]">
            <div className="text-center lg:text-right md:w-full lg:w-1/2">
              <h3 className="text-2xl font-extrabold text-gray-900">
                Saturday draws
              </h3>
              <p className="text-gray-900 text-xs mt-2">
                have bigger prizes! Make sure you have points ready.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg h-[150px] bg-gradient-to-r from-[#FFB830] to-[#F8951D]">
          <div className="absolute h-full inset-0 bg-[url('/images/jackpot.png')] bg-repeat-x  bg-left z-0" />

          <div className="absolute h-full inset-0 bg-gradient-to-r from-[#FFB830]/10 via-[#F8951D]/90 to-transparent z-10" />

          <div className="relative z-20 flex justify-end items-center h-full px-6 bg-gradient-to-r from-[#FFB830]/5 to-[#FF8E00]">
            <div className="text-center lg:text-right md:w-full lg:w-1/2">
              <h3 className="text-2xl font-extrabold text-gray-900">
                Saturday draws
              </h3>
              <p className="text-gray-900 text-xs mt-2">
                have bigger prizes! Make sure you have points ready.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
