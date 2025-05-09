import React from "react"
import { motion } from "framer-motion"

export function WinnerStructureTable() {
  const winnerData = [
    {
      amount: "Users who top-up ₦100-₦299",
      points: "1 point",
    },
    {
      amount: "Users who top-up ₦200-₦399",
      points: "2 points",
    },
    {
      amount: "Users who top-up ₦300-₦499",
      points: "3 points",
    },
    {
      amount: "Users who top-up ₦400-₦599",
      points: "4 points",
    },
    {
      amount: "Every additional ₦100 bracket gives an additional 1 point",
      points: "",
    },
  ];

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
              <th className="px-4 py-3 text-left text-base font-bold">
                Top-up Amount
              </th>
              <th className="px-4 py-3 text-left text-base font-bold">
                Points Earned
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {winnerData.map((row, index) => (
              <tr key={index} className="bg-white text-left text-gray-600">
                <td className="px-4 py-3 text-sm">{row.amount}</td>
                <td className="px-4 py-3 text-sm">{row.points}</td>
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
          {winnerData.map((row, index) => (
            <div key={index} className="p-4">
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>{row.amount}</div>
                <div>{row.points}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
