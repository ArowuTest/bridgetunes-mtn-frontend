import { formatPhone } from "@/src/utils/format-phone"
import { useState } from "react"
import { motion } from "framer-motion"

export const JoinNow = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [formattedPhone, setFormattedPhone] = useState("")
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  return (
    <section className="bg-[#0B0D24] py-20 px-6 text-white">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl md:text-3xl font-semibold mb-2">
          Welcome To MyNumba Don Win!
        </h2>
        <p className="text-gray-400 text-sm">
          Recharge Your Phone Now To Start Earning Points
        </p>
      </motion.div>

      <motion.div
        className="max-w-md mx-auto text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <label className="block text-yellow-400 mb-2">
            Phone Number (MTN)
          </label>
          <input
            type="tel"
            className="w-full bg-gray-800/80 border border-gray-800/50 rounded py-3 px-4 text-white placeholder-gray-500"
            maxLength={18}
            placeholder="234 081 300 000 00"
            value={formattedPhone}
            onChange={e => {
              const raw = e.target.value.replace(/\D/g, "")
              const formatted = formatPhone(raw)
              setPhoneNumber(e.target.value)
              setFormattedPhone(formatted)
            }}
          />
          <p className="text-gray-500 text-xs mt-2">
            Enter Your MTN Number in format: 080XXXXXXXX Or 234XXXXXXXXXX
          </p>
        </div>

        <div className="flex flex-col mb-6 max-w-xs mx-auto items-center">
          <p className="text-gray-400 text-xs mb-2">
            You Can Also Register By:
          </p>
          <ul className="text-gray-400 text-xs space-y-2 mb-2">
            <li className="flex items-center">
              <span className="mr-2">•</span> Sending "JOIN" To 5050
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Dialing *123*1# And Selecting
              Option 1
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Using The MyMTN App
            </li>
          </ul>
        </div>

        <div className="w-full flex items-center justify-center mb-6">
          <input
            type="checkbox"
            id="terms"
            className="mr-2 w-fit"
            checked={agreeToTerms}
            onChange={() => setAgreeToTerms(!agreeToTerms)}
          />
          <label htmlFor="terms" className="text-xs text-gray-400">
            I agree to{" "}
            <span className="cursor-pointer underline underline-offset-2">
              Terms
            </span>{" "}
            and{" "}
            <span className="cursor-pointer underline underline-offset-2">
              Privacy Statement
            </span>
          </label>
        </div>

        <button
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-4 rounded"
          disabled={!agreeToTerms}
        >
          Join Now
        </button>
      </motion.div>
    </section>
  )
}
