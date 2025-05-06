import { motion } from "framer-motion"
import { FaRegCalendar } from "react-icons/fa"
import { MdPhonelinkRing } from "react-icons/md"
import { LuTicket } from "react-icons/lu"
import { GiDiceTarget } from "react-icons/gi"

export const DashboardDataInfo = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-4 py-8"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full md:w-1/4 bg-[#0056B3] rounded-lg text-gray-300 p-6 space-y-4">
        <p className="bg-green-400 text-gray-900 w-fit rounded-lg text-xs px-2 py-1">
          Active
        </p>

        <div className="flex md:flex-col lg:flex-row gap-4 md:gap-2 lg:gap-4 md:items-start lg:items-center">
          <div className="md:hidden lg:block rounded-full w-20 h-20 bg-yellow-400"></div>
          <div className="flex flex-col">
            <span className="text-xs mb-4 md:mb-1 lg:mb-4">Welcome Back!</span>
            <p className="text-md text-white font-semibold capitalize">
              John Lekan
            </p>
            <p className="text-xs">08012345678</p>
          </div>
        </div>

        <div className="flex flex-row md:flex-col lg:flex-row gap-3 md:items-start lg:items-center">
          <p className="text-xs">Current point for next draw</p>
          <p className="flex items-center text-yellow-400 text-md">
            <img src="/images/coin.svg" alt="coin" className="mr-2" />
            2,000
          </p>
        </div>

        <p className="flex gap-3 text-xs">
          <span>
            <span className="mr-1">•</span>
            Opted In
          </span>
          <span className="text-yellow-400">Yes</span>
        </p>
      </div>

      <div className="flex-1 bg-gradient-to-r from-[#101935] to-[#090F21] p-6 space-y-4 rounded-lg">
        <h4 className="text-white">
          Join MyNumba Don <br /> Win Journey
        </h4>

        <div className="overflow-x-auto">
          <div className="flex flex-col md:flex-row gap-4 lg:gap-8 lg:px-2 min-w-full ">
            {[
              {
                icon: <FaRegCalendar color="#FFCC00" />,
                label: "Join Date",
                value: "2025-04-01",
              },
              {
                icon: <MdPhonelinkRing color="#FFCC00" />,
                label: "Total Recharges",
                value: "15",
              },
              {
                icon: <GiDiceTarget color="#FFCC00" />,
                label: "Points Earned",
                value: "2,000",
              },
              {
                icon: <LuTicket color="#FFCC00" />,
                label: "Eligible Draws",
                value: "12",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="w-full mx-auto md:w-1/4 bg-gradient-to-b from-[#FFCC08] to-[#FF9100] p-0.5 rounded-lg"
              >
                <div className="flex flex-col justify-center items-center text-center w-full h-full py-6 px-4 rounded-lg bg-gradient-to-r from-[#101935] to-[#090F21] flex-shrink-0 space-y-4 md:space-y-0">
                  <div className="mb-2 text-3xl md:text-base">{item.icon}</div>
                  <p className="text-xs text-gray-400 font-semibold">
                    {item.label}
                  </p>
                  <p className="text-white font-bold text-2xl md:text-base lg:text-xl mt-1">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-white bg-[#0056B3] rounded-md w-fit px-2 py-1">
          "You're in the top 10% of participants!"
        </p>
      </div>
    </motion.div>
  )
}
