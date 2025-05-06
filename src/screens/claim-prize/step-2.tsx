import { useState } from "react"
import { TbFileUpload } from "react-icons/tb"

export const StepTwo = () => {
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  return (
    <div className="mx-auto w-1/3">
      <h4 className="text-gray-200 text-sm text-center">Payment Details</h4>

      <div className="flex flex-col items-start space-y-6 py-4 pb-12">
        <div className="flex flex-col w-full">
          <label
            htmlFor="bank"
            className="text-left text-xs pb-1 text-gray-400"
          >
            Bank
          </label>
          <input
            name="bank"
            type="text"
            className="w-full bg-neutral-800 border-0 outline-none px-3  text-gray-400"
          />
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="bank"
            className="text-left text-xs pb-1 text-gray-400"
          >
            Account Number
          </label>
          <input
            name="accountNumber"
            type="text"
            placeholder="Account Number"
            className="w-full bg-neutral-800 border-0 outline-none px-3  text-gray-400 text-xs"
          />
        </div>
      </div>

      <button className="bg-yellow-400 text-black text-sm rounded-lg px-6 py-2 hover:bg-yellow-500">
        Confirm Payment Details
      </button>
    </div>
  )
}
