import { useState } from "react"

export const JoinNow = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  return (
    <section className="bg-[#0B0D24] py-20 px-6 text-white">
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-3xl font-semibold mb-2">
          Welcome To MyNumba Don Win!
        </h2>
        <p className="text-gray-400 text-sm">
          Recharge Your Phone Now To Start Earning Points
        </p>
      </div>

      <div className="max-w-md mx-auto text-center">
        <div className="mb-6">
          <label className="block text-yellow-400 mb-2">
            Phone Number (MTN)
          </label>
          <input
            type="text"
            className="w-full bg-gray-800/80 border border-gray-700 rounded py-3 px-4 text-white placeholder-gray-500"
            placeholder="0812345678"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
          <p className="text-gray-500 text-xs mt-1">
            Enter Your MTN Number in format: 080XXXXXXXX Or 234XXXXXXXXXX
          </p>
        </div>

        <div className="mb-6">
          <p className="text-gray-300 mb-2">You Can Also Register By:</p>
          <ul className="text-gray-400 text-sm space-y-1 ml-4">
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

        <div className="w-full flex items-center mb-6">
          <input
            type="checkbox"
            id="terms"
            className="mr-2"
            checked={agreeToTerms}
            onChange={() => setAgreeToTerms(!agreeToTerms)}
          />
          <label htmlFor="terms" className="text-sm text-gray-300">
            I agree to <span className="text-blue-400">Terms</span> and{" "}
            <span className="text-blue-400">Privacy Statement</span>
          </label>
        </div>

        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-4 rounded">
          Join Now
        </button>
      </div>
    </section>
  )
}
