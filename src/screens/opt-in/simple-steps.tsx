import { PatternBG } from "@/src/components/common/pattern-bg"
import { joinSteps } from "./data"
import React from "react"
import classNames from "classnames"
import { motion } from "framer-motion"
import parse from "html-react-parser";

export const SimpleSteps = () => {
  return (
    <PatternBG className="px-6 py-20 md:py-32">
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-semibold mb-16 text-gray-200"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        "Join MTN Mega Billion Promo In 3 Simple Steps"
      </motion.h2>

      <div className="flex flex-col sm:flex-row justify-between gap-6 md:gap-4 max-w-5xl mx-auto">
        {joinSteps.map((step, idx) => (
          <React.Fragment key={idx}>
            <motion.div
              className="flex flex-col items-center w-full sm:w-[220px] md:w-[260px] text-center mt-5 md:mt-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.3, ease: "easeOut" }}
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-14 md:w-18 h-18 mb-4"
              />
              <h3 className="text-yellow-400/80 font-bold mt-5">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 max-w-xs mt-2">
                {parse(step.desc)}
              </p>
            </motion.div>

            {idx < joinSteps.length - 1 && (
              <motion.div
                className={classNames("w-2/5 hidden md:block", {
                  "pt-3": idx === 0,
                  "pt-20": idx === 1,
                })}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
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
  );
};
