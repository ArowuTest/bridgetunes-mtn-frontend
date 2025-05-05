import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md"
import { FiInfo } from "react-icons/fi"
import { YourPointsJourney } from "./journey-graph"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export const DashboardGraphInfo = () => {
  const [range, setRange] = useState("Last month")
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const ranges = ["Last 7 days", "Last month", "Last 3 months"]

  const handleDropdown = () => setOpen(!open)

  const handleSelect = (value: string) => {
    setRange(value)
    setOpen(false)
  }

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <motion.div
      className="flex flex-col md:flex-row gap-4 py-8"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full md:flex-1 bg-gradient-to-r from-[#090F21] to-[#101935] rounded-lg text-gray-300 p-6 space-y-4">
        <header className="flex items-center justify-between mb-6">
          <h4 className="flex items-center text-white">
            Your Points Journey <FiInfo className="ml-2 cursor-pointer" />
          </h4>

          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center border border-neutral-700 py-1 px-2 rounded-lg text-xs"
              onClick={handleDropdown}
            >
              Last month{" "}
              {open ? (
                <MdOutlineKeyboardArrowUp className="ml-2" />
              ) : (
                <MdOutlineKeyboardArrowDown className="ml-2" />
              )}
            </button>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 bg-[#1a1c2b] border border-neutral-700 rounded-md shadow z-20 overflow-hidden"
                >
                  {ranges.map(r => (
                    <button
                      key={r}
                      onClick={() => handleSelect(r)}
                      className={`block px-4 py-2 text-xs text-white hover:bg-neutral-700 w-full text-left ${
                        r === range ? "bg-neutral-800" : ""
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </header>

        <YourPointsJourney />
      </div>

      <div className="w-full md:w-1/3 bg-gradient-to-r from-[#101935] to-[#090F21] p-6 space-y-4 rounded-lg">
        <h4 className="flex items-center text-white">
          Recent Activities <FiInfo className="ml-2 cursor-pointer" />
        </h4>

        <div className="">
          <div className="flex flex-col border-b-2 border-b-gray-600 py-3">
            <p className="text-gray-500 text-xs font-semibold">
              Recharge Entry:
            </p>
            <p className="text-gray-300 text-sm font-light">
              You recharged N500 and earned 50 points!
            </p>
          </div>

          <div className="flex flex-col border-b-2 border-b-gray-600 py-3">
            <p className="text-gray-500 text-xs font-semibold">Draw Entry:</p>
            <p className="text-gray-300 text-sm font-light">
              Your 50 points were entered into the Saturday draw
            </p>
          </div>

          <div className="flex flex-col border-b-2 border-b-gray-600 py-3">
            <p className="text-gray-500 text-xs font-semibold">
              Win Notification:
            </p>
            <p className="text-gray-300 text-sm font-light">
              Congratulations! You won <b>N300,000</b> in the <b>Friday</b>{" "}
              draw!
            </p>
          </div>
        </div>

        <p className="text-xs text-yellow-500 underline cursor-pointer underline-offset-1">
          see all
        </p>
      </div>
    </motion.div>
  )
}
