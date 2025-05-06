import { PatternBG } from "@/src/components/common/pattern-bg"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaCheckCircle } from "react-icons/fa"
import { TbFileUpload } from "react-icons/tb"
import { StepOne } from "./step-1"
import { motion } from "framer-motion"
import { StepTwo } from "./step-2"
import { StepThree } from "./step-3"

export const ClaimPrizeScreen = () => {
  const [active, setActive] = useState("step-1")

  const renderSteps = () => {
    let stepToShow

    switch (active) {
      case "step-1":
        stepToShow = <StepOne />
        break
      case "step-2":
        stepToShow = <StepTwo />
        break
      case "step-3":
        stepToShow = <StepThree />
        break
      default:
        stepToShow = <StepOne />
    }

    return stepToShow
  }

  return (
    <PatternBG className="py-20 px-4 h-screen flex items-center">
      <div className="bg-black w-full max-w-6xl mx-auto px-4 py-24 space-y-4">
        <h3 className="text-gray-200 text-xl md:text-3xl ">
          Claim Your Prize In 3 Easy Steps
        </h3>

        <div className="w-2/5 flex items-center justify-center gap-3 mx-auto py-6">
          <div
            className={`flex flex-col items-center space-y-1 w-1/5 ${
              active === "step-1" || active === "step-2" || active === "step-3"
                ? "text-gray-200"
                : ""
            }`}
          >
            <FaCheckCircle color="#FFCC00" />
            <p className="flex flex-col pt-2">
              <span className="text-xs">ID Verification</span>
              <span className="text-xs">1/3</span>
            </p>
          </div>

          <div className="w-1/5 border-b border-[#1B1D1E]" />

          <div
            className={`flex flex-col items-center space-y-1 w-1/5 ${
              active === "step-2" || active === "step-3" ? "text-gray-200" : ""
            }`}
          >
            {active === "step-2" || active === "step-3" ? (
              <FaCheckCircle color="#FFCC00" />
            ) : (
              <span className="rounded-full w-5 h-5 text-xs flex items-center justify-center bg-[#1B1D1E] text-gray-600">
                2
              </span>
            )}

            <p className="flex flex-col pt-2">
              <span className="text-xs">ID Verification</span>
              <span className="text-xs">2/3</span>
            </p>
          </div>

          <div className="w-1/5 border-b border-[#1B1D1E]" />

          <div
            className={`flex flex-col items-center space-y-1 w-1/5 ${
              active === "step-3" ? "text-gray-200" : ""
            }`}
          >
            {active === "step-3" ? (
              <FaCheckCircle color="#FFCC00" />
            ) : (
              <span className="rounded-full w-5 h-5 text-xs flex items-center justify-center bg-[#1B1D1E] text-gray-600">
                3
              </span>
            )}

            <p className="flex flex-col pt-2">
              <span className="text-xs">ID Verification</span>
              <span className="text-xs">3/3</span>
            </p>
          </div>
        </div>

        <AnimatePresence mode="wait">{renderSteps()}</AnimatePresence>
      </div>
    </PatternBG>
  )
}
