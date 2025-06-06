import { PatternBG } from "@/src/components/common/pattern-bg"
import { useState } from "react"
import { motion } from "framer-motion"

type TabKey =
  | "Eligibility"
  | "How Points Work"
  | "Draw Process"
  | "Prize Collection"
  | "Important Dates"

export const TermsAndConditionsMadeEasy = () => {
  const [activeTab, setActiveTab] = useState("Eligibility")

  const tabContent: Record<TabKey, string> = {
    Eligibility:
      "In order to be eligible to participate you must be above 18, you must have opted in to the promo event through one of our opt-In channels. In order to be eligible for a draw you must  satisfy the above conditions and recharged your MTN line during the draw window.",
    "How Points Work":
      "Points are awarded based on the value of your recharge, every N100 recharge gives you 1 point. The points reflects how many times your MTN number will be entered into the eligible daily or weekly draws.",
    "Draw Process":
      "Our transparent draw process ensures fair selection of winners every time.",
    "Prize Collection":
      "Winners will be notified immediately after each draw and the customer support team will guide you through the prize redemption process. All redeemed prizes will be paid into your MoMo wallets. If you don't have a MoMo wallet you can dial *671# on your MTN line to have one opened for you.",
    "Important Dates":
      "Mark your calendar for upcoming draws and promotional periods.",
  };

  return (
    <PatternBG className="px-6 py-24">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-white text-2xl font-bold mb-2">
          Terms & Conditions Made Simple
        </h2>
        <p className="text-gray-400 text-sm">
          We've Made Our Terms Easy To Understand. Here's What You Need To Know:
        </p>
      </motion.div>

      <div className="mt-12 mx-auto max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%]">
        <motion.div
          className="flex flex-col md:flex-row shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Tab Navigation */}
          <div className="bg-yellow-400 py-16 px-12">
            <motion.ul
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              {(Object.keys(tabContent) as TabKey[]).map(tab => (
                <li
                  key={tab}
                  className={`cursor-pointer flex items-center ${
                    activeTab === tab ? "font-bold text-gray-100" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  <span className="mr-2">•</span> {tab}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right Content Area */}
          <div className="bg-white p-12 flex-1 flex items-center">
            <motion.p
              className="text-gray-600 text-base"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              {tabContent[activeTab as TabKey]}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </PatternBG>
  )
}
