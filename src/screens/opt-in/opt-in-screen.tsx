import { PatternBG } from "@/src/components/common/pattern-bg"
import classNames from "classnames"
import React from "react"
import { joinSteps, whyJoin } from "./data"
import { JoinNow } from "./join-now"
import { TermsAndConditionsMadeEasy } from "./terms-and-conditions"

export const OptInScreen: React.FC = () => {
  return (
    <div>
      <PatternBG className="px-6 py-24">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-16  text-gray-200">
          "Join MyNumba Don Win In 3 Simple Steps"
        </h2>

        <div className="flex flex-col sm:flex-row justify-between gap-6 md:gap-4 max-w-5xl mx-auto">
          {joinSteps.map((step, idx) => (
            // <div key={idx} className=" w-full flex items-start">
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center w-full sm:w-[220px] md:w-[260px] text-center mt-5 md:mt-0">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-14 md:w-18 h-18 mb-4"
                />
                <h3 className="text-yellow-400/80 font-bold mt-5">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 max-w-xs mt-2">
                  {step.desc}
                </p>
              </div>

              {idx < joinSteps.length - 1 && (
                <div
                  className={classNames("w-2/5 hidden md:block", {
                    "pt-3": idx === 0,
                    "pt-20": idx === 1,
                  })}
                >
                  <img
                    src={`${
                      idx === 0
                        ? "/images/arrow-down.svg"
                        : "/images/arrow-up.svg"
                    }`}
                    alt="arrow"
                    className="w-full "
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </PatternBG>

      <section className="bg-[#0B0D24] py-20 px-6 text-white">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-16 text-gray-200 text-center">
          Why Join MyNumba Don Win?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {whyJoin.map((benefit, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-3xl p-12 flex items-start gap-4 ${benefit.bg}`}
            >
              <div
                className={classNames(
                  "w-2/3",
                  idx === 0 || idx === 3 ? "text-black" : "text-gray-200"
                )}
              >
                <h3
                  className={classNames(
                    "w-fit rounded-md px-2 font-bold mb-4 text-xl tracking-wide",
                    idx === 0 || idx === 3 ? "bg-[#0056B3]" : "bg-[#FFCC00]",
                    idx === 0 || idx === 3 ? "text-white" : "text-neutral-700"
                  )}
                >
                  {benefit.title}
                </h3>
                <p className="font-semibold text-sm md:text-lg">
                  {benefit.label} -
                </p>
                <p className="font-extralight text-sm md:text-base mt-1">
                  {benefit.desc}
                </p>
              </div>

              <div className="absolute bottom-0 right-0 flex-1 w-[35%] overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.label}
                  className="w-full object-contain self-end"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <TermsAndConditionsMadeEasy />

      <JoinNow />
    </div>
  )
}
