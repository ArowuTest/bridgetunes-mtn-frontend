import React from "react"
import { allTimeWinners, jackpotWinners, recentWinners } from "./data"
import { motion } from "framer-motion"

export const WinnersTabDisplay = () => {
  const [activeTab, setActiveTab] = React.useState("recent")

  const renderWinners = () => {
    let winnersToShow = []

    switch (activeTab) {
      case "recent":
        winnersToShow = recentWinners
        break
      case "jackpot":
        winnersToShow = jackpotWinners
        break
      case "allTime":
        winnersToShow = allTimeWinners
        break
      default:
        winnersToShow = recentWinners
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {winnersToShow.map((winner, index) => (
          <motion.div
            key={winner.id}
            className="p-4 bg-black bg-[url('/images/confetti.png')] bg-no-repeat bg-cover bg-center shadow-md rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="flex gap-4 mb-4">
              <img
                src="/images/winner-badge.png"
                alt="Winner badge"
                className="w-1/3 md:auto object-contain"
              />

              <div className="flex flex-col items-center text-gray-400 w-1/2 space-y-1">
                <p className="text-xs">{winner.phone}</p>
                <p className="text-xs text-gray-300">{winner.name}</p>
                <p className="text-xs font-semibold text-white">
                  {winner.drawType}
                </p>
                <p className="text-lg md:text-xl xl:text-2xl font-bold text-yellow-500">
                  {winner.prize}
                </p>
                <p className="text-xs">Date: {winner.date}</p>
              </div>
            </div>

            <div className="bg-[#FFCC00] rounded-2xl flex items-center  border-l-8 border-l-white">
              <p className="text-xs text-left py-2 px-4">"{winner.quote}"</p>
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <section className="py-16 px-4 bg-[#090F21] text-center">
      <div className="flex flex-col items-center">
        <motion.div
          className="flex justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {["recent", "jackpot", "allTime"].map(tab => (
            <span
              key={tab}
              className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-light transition-all duration-300 cursor-pointer text-xs md:text-sm ${
                activeTab === tab
                  ? "text-yellow-500 font-semibold border-b-2 border-b-yellow-500"
                  : "text-gray-400 hover:text-gray-300 border-b-2 border-b-transparent"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "recent"
                ? "Recent Winners"
                : tab === "jackpot"
                ? "Jackpot Winners"
                : "All-Time Winners"}
            </span>
          ))}
        </motion.div>

        <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto py-8 px-6">
          {renderWinners()}
        </div>
      </div>
    </section>
  )
}
