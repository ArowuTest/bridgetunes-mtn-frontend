import React from "react"
import { motion } from "framer-motion"

export function PriceStructureTable() {
  const prizeData = [
    {
      prize: "Jackpot (1st Prize)",
      weekday: "₦5,000,000",
      saturday: "₦10,000,000",
    },
    { prize: "2nd Prize", weekday: "₦350,000", saturday: "₦5,000,000" },
    { prize: "3rd Prize", weekday: "₦150,000", saturday: "₦500,000" },
    { prize: "Concession Prize #1", weekday: "₦75,000", saturday: "₦100,000" },
    { prize: "Concession Prize #2", weekday: "₦75,000", saturday: "₦100,000" },
    { prize: "Concession Prize #3", weekday: "₦75,000", saturday: "₦100,000" },
    { prize: "Concession Prize #4", weekday: "₦75,000", saturday: "₦100,000" },
    { prize: "Concession Prize #4", weekday: "₦75,000", saturday: "₦100,000" },
    { prize: "Concession Prize #5", weekday: "₦75,000", saturday: "₦100,000" },
    { prize: "Concession Prize #6", weekday: "₦75,000", saturday: "₦100,000" },
  ]

  // Calculate totals
  const weekdayTotal = "₦2,025,000"
  const saturdayTotal = "₦5,200,000"

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
              <th className="px-4 py-3 text-left text-base font-bold">Prize</th>
              <th className="px-4 py-3 text-left text-base font-bold">
                Weekday (Mon-Fri)
              </th>
              <th className="px-4 py-3 text-left text-base font-bold">
                Saturday Special
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {prizeData.map((row, index) => (
              <tr key={index} className="bg-white text-left text-gray-600">
                <td className="px-4 py-3 text-sm">{row.prize}</td>
                <td className="px-4 py-3 text-sm">{row.weekday}</td>
                <td className="px-4 py-3 text-sm">{row.saturday}</td>
              </tr>
            ))}
            <tr className="bg-blue-600 text-white text-left">
              <td className="px-4 py-3 font-bold text-sm">TOTAL</td>
              <td className="px-4 py-3 font-bold text-sm">{weekdayTotal}</td>
              <td className="px-4 py-3 font-bold text-sm">{saturdayTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile view - Cards */}
      <div className="md:hidden space-y-4">
        <div className="bg-yellow-400 rounded-t-lg p-4 font-semibold">
          <div className="grid grid-cols-3 gap-2">
            <div>Prize</div>
            <div>Weekday</div>
            <div>Saturday</div>
          </div>
        </div>

        <div className="bg-white rounded-b-lg divide-y divide-gray-200">
          {prizeData.map((row, index) => (
            <div key={index} className="p-4">
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>{row.prize}</div>
                <div>{row.weekday}</div>
                <div>{row.saturday}</div>
              </div>
            </div>
          ))}

          <div className="bg-blue-600 text-white p-4 rounded-b-lg">
            <div className="grid grid-cols-3 gap-2 font-bold text-sm">
              <div>TOTAL</div>
              <div>{weekdayTotal}</div>
              <div>{saturdayTotal}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
