import { PatternBG } from "@/src/components/common/pattern-bg"
import { motion } from "framer-motion"
import React from "react"
import { selectionProcess } from "./data"
import classNames from "classnames"

export const HowWinnersAreSelected = () => {
  return (
    <PatternBG className="px-6 py-20 space-y-12">
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-semibold mb-16 text-gray-200"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        How Winners Are Selected
      </motion.h2>

      <div className="flex flex-col sm:flex-row justify-between gap-6 md:gap-4 max-w-5xl mx-auto">
        {selectionProcess.slice(0, 3).map((step, idx) => (
          <React.Fragment key={idx}>
            <motion.div
              className="flex flex-col items-center w-full sm:w-[220px] md:w-[260px] text-center mt-5 md:mt-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: idx * 0.3, ease: "easeOut" }}
            >
              <div className="w-[60px] h-[60px] bg-[linear-gradient(45deg,_#164d81_0%,_#07569E_77%,_#1a6c95_100%)] rounded-tr-xl rounded-tl-xl rounded-bl-0 rounded-br-xl flex items-center justify-center text-yellow-400 text-2xl font-bold shadow-inner">
                {idx + 1}
              </div>

              <p className="text-sm text-gray-400 max-w-xs mt-6 hover:text-yellow-400">
                {step.desc}
              </p>
            </motion.div>

            {idx < 2 && (
              <motion.div
                className={classNames("w-2/5 hidden md:block", {
                  "pt-3": idx === 0,
                  "pt-20": idx === 1,
                })}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.3 + 0.15,
                  ease: "easeOut",
                }}
              >
                <img
                  src={`${
                    idx === 0
                      ? "/images/arrow-down.svg"
                      : "/images/arrow-up.svg"
                  }`}
                  alt="arrow"
                  className="w-full"
                />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 md:gap-2 max-w-2xl mx-auto pt-12">
        {selectionProcess.slice(3).map((step, idx) => (
          <React.Fragment key={idx}>
            <motion.div
              className="flex flex-col items-center w-full sm:w-[220px] md:w-[260px] text-center mt-5 md:mt-0"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: idx * 0.3, ease: "easeOut" }}
            >
              <div className="w-[60px] h-[60px] bg-[linear-gradient(45deg,_#164d81_0%,_#07569E_77%,_#1a6c95_100%)] rounded-tr-xl rounded-tl-xl rounded-bl-0 rounded-br-xl flex items-center justify-center text-yellow-400 text-2xl font-bold shadow-inner">
                {idx + 4}
              </div>

              <p className="text-sm text-gray-400 max-w-xs mt-6 hover:text-yellow-400">
                {step.desc}
              </p>
            </motion.div>

            {idx < 1 && (
              <motion.div
                className={classNames("w-2/5 hidden md:block", {
                  "pt-3": idx === 0,
                  "pt-20": idx === 1,
                })}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.3 + 0.15,
                  ease: "easeOut",
                }}
              >
                <img
                  src={`${
                    idx === 0
                      ? "/images/arrow-down.svg"
                      : "/images/arrow-up.svg"
                  }`}
                  alt="arrow"
                  className="w-full"
                />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </PatternBG>
  )
}
