import { PatternBG } from "@/src/components/common/pattern-bg"
import { useState } from "react"

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
      "Winnings Sent Directly To Your Account! Winnings Sent Directly To Your Account! Winnings Sent Directly To Your Account! Winnings Sent Directly To Your Account! Winnings Sent Directly To Your Account! Winnings Sent Directly To Your Account!",
    "How Points Work":
      "Learn how points are earned and calculated based on your recharges and transactions.",
    "Draw Process":
      "Our transparent draw process ensures fair selection of winners every time.",
    "Prize Collection": "Discover how to collect your prizes when you win!",
    "Important Dates":
      "Mark your calendar for upcoming draws and promotional periods.",
  }

  return (
    <PatternBG className="px-6 py-24">
      <div className="text-center">
        <h2 className="text-white text-2xl font-bold mb-2">
          Terms & Conditions Made Simple
        </h2>
        <p className="text-gray-400 text-sm">
          We've Made Our Terms Easy To Understand. Here's What You Need To Know:
        </p>
      </div>

      <div className="mt-12 mx-auto max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%]">
        <div className="flex flex-col md:flex-row shadow-lg">
          {/* Left Tab Navigation */}
          <div className="bg-yellow-400 py-16 px-12">
            <ul className="space-y-4">
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
            </ul>
          </div>

          {/* Right Content Area */}
          <div className="bg-white p-12 flex-1 flex items-center">
            <p className="text-gray-600 text-base">
              {tabContent[activeTab as TabKey]}
            </p>
          </div>
        </div>
      </div>
    </PatternBG>
  )
}
