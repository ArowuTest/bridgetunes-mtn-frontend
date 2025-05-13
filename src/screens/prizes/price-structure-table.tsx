import React from "react";
import { motion } from "framer-motion";

export function PriceStructureTable() {
  const prizeData = [
    {
      prize: "Jackpot (1st Prize)",
      dailyPrizes: "₦5,000,000",
      noOfPrizes: "1",
      totalDailyPrizeValue: "₦5,000,000",
      saturdaySpecial: "₦10,000,000",
      noOfPrizesSat: "1",
      totalDailyPrizeValueSat: "₦10,000,000",
    },
    {
      prize: "2nd Prize",
      dailyPrizes: "₦1,000,000",
      noOfPrizes: "1",
      totalDailyPrizeValue: "₦1,000,000",
      saturdaySpecial: "₦2,000,000",
      noOfPrizesSat: "2",
      totalDailyPrizeValueSat: "₦4,000,000",
    },
    {
      prize: "3rd Prize",
      dailyPrizes: "₦500,000",
      noOfPrizes: "1",
      totalDailyPrizeValue: "₦500,000",
      saturdaySpecial: "₦1,000,000",
      noOfPrizesSat: "2",
      totalDailyPrizeValueSat: "₦2,000,000",
    },
    {
      prize: "Concession Prize #1",
      dailyPrizes: "₦100,000",
      noOfPrizes: "30",
      totalDailyPrizeValue: "₦3,000,000",
      saturdaySpecial: "₦100,000",
      noOfPrizesSat: "40",
      totalDailyPrizeValueSat: "₦4,000,000",
    },
    {
      prize: "Concession Prize #2",
      dailyPrizes: "₦75,000",
      noOfPrizes: "10",
      totalDailyPrizeValue: "₦750,000",
      saturdaySpecial: "₦75,000",
      noOfPrizesSat: "30",
      totalDailyPrizeValueSat: "₦2,250,000",
    },
    {
      prize: "Concession Prize #3",
      dailyPrizes: "₦50,000",
      noOfPrizes: "10",
      totalDailyPrizeValue: "₦500,000",
      saturdaySpecial: "₦50,000",
      noOfPrizesSat: "19",
      totalDailyPrizeValueSat: "₦950,000",
    },
    {
      prize: "Concession Prize #4",
      dailyPrizes: "₦25,000",
      noOfPrizes: "10",
      totalDailyPrizeValue: "₦250,000",
      saturdaySpecial: "₦25,000",
      noOfPrizesSat: "10",
      totalDailyPrizeValueSat: "₦250,000",
    },
  ];

  // Calculate weekday totals
  const dailyPrizes = "₦6,750,000";
  const noOfPrizes = "63 Winners";
  const totalDailyPrizeValue = "₦11,000,000";

  //Calculate weekend totals
  const saturdaySpecial = "₦13,250,000";
  const noOfPrizesSaturday = "104 Winners";
  const totalDailyPrizeSaturday = "₦23,450,000";

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
                Prize Pool Breakdown
              </th>
              <th className="px-4 py-3 text-left text-base font-bold">
                Daily Prizes [Mon - Fri]
              </th>
              <th className="px-4 py-3 text-left text-base font-bold">
                No. of Prizes [Mon-Fri]
              </th>
              <th className="px-4 py-3 text-left text-base font-bold">
                Total Daily Prize Value
              </th>
              <th className="bg-[#2C73DB] text-white px-4 py-3 text-left text-base font-bold">
                Saturday Special
              </th>
              <th className="bg-[#2C73DB] text-white px-4 py-3 text-left text-base font-bold">
                No. of Prizes [Sat]
              </th>
              <th className="bg-[#2C73DB] text-white px-4 py-3 text-left text-base font-bold">
                Total Daily Prize Value [Saturday]
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {prizeData.map((row, index) => (
              <tr key={index} className="bg-white text-left text-gray-600">
                <td className="px-4 py-3 text-sm">{row.prize}</td>
                <td className="px-4 py-3 text-sm">{row.dailyPrizes}</td>
                <td className="px-4 py-3 text-sm">{row.noOfPrizes}</td>
                <td className="px-4 py-3 text-sm">
                  {row.totalDailyPrizeValue}
                </td>
                <td className="px-4 py-3 text-sm">{row.saturdaySpecial}</td>
                <td className="px-4 py-3 text-sm">{row.noOfPrizesSat}</td>
                <td className="px-4 py-3 text-sm">
                  {row.totalDailyPrizeValueSat}
                </td>
              </tr>
            ))}
            <tr className="bg-black text-white text-left">
              <td className="px-4 py-3 font-bold text-sm">TOTAL</td>
              <td className="px-4 py-3 font-bold text-sm">{dailyPrizes}</td>
              <td className="px-4 py-3 font-bold text-sm">{noOfPrizes}</td>
              <td className="px-4 py-3 font-bold text-sm">
                {totalDailyPrizeValue}
              </td>
              <td className="px-4 py-3 font-bold text-sm">{saturdaySpecial}</td>
              <td className="px-4 py-3 font-bold text-sm">
                {noOfPrizesSaturday}
              </td>
              <td className="px-4 py-3 font-bold text-sm">
                {totalDailyPrizeSaturday}
              </td>
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
                <div>{row.dailyPrizes}</div>
                <div>{row.noOfPrizes}</div>
              </div>
            </div>
          ))}

          <div className="bg-blue-600 text-white p-4 rounded-b-lg">
            <div className="grid grid-cols-3 gap-2 font-bold text-sm">
              <div>TOTAL</div>
              <div>{dailyPrizes}</div>
              <div>{noOfPrizes}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
