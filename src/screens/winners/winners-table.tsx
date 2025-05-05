import React from "react"
import { motion } from "framer-motion"
import { allTimeWinners } from "./data"

export function WinnerTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
    >
      <div className="hidden md:block overflow-hidden rounded-lg border border-gray-700 shadow">
        <table className="w-full">
          <thead className="bg-yellow-500">
            <tr>
              <th className="px-4 py-3 text-left text-base font-bold">Date</th>
              <th className="px-4 py-3 text-left text-base font-bold">Name</th>
              <th className="px-4 py-3 text-left text-base font-bold">
                Phone Number
              </th>
              <th className="px-4 py-3 text-left text-base font-bold">Prize</th>
              <th className="px-4 py-3 text-left text-base font-bold">
                Draw Type
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {allTimeWinners.map((row, index) => (
              <tr key={index} className="bg-white text-left text-gray-600">
                <td className="px-4 py-3 text-sm">{row.date}</td>
                <td className="px-4 py-3 text-sm">{row.name}</td>
                <td className="px-4 py-3 text-sm">{row.phone}</td>
                <td className="px-4 py-3 text-sm">{row.prize}</td>
                <td className="px-4 py-3 text-sm">{row.drawType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view - Cards */}
      <div className="md:hidden space-y-4">
        <div className="bg-yellow-400 rounded-t-lg p-4 font-semibold">
          <div className="grid grid-cols-3 gap-2">
            <p>Top-up Amount</p>
            <p>Points Earned</p>
          </div>
        </div>

        <div className="bg-white rounded-b-lg divide-y divide-gray-200">
          {allTimeWinners.map((row, index) => (
            <div key={index} className="p-4">
              <div className="grid grid-cols-3 gap-2 text-sm">
                <p>{row.date}</p>
                <p>{row.name}</p>
                <p>{row.phone}</p>
                <p>{row.prize}</p>
                <p>{row.drawType}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
