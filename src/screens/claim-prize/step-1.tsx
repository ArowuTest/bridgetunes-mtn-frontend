import { useState } from "react"
import { TbFileUpload } from "react-icons/tb"

export const StepOne = () => {
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  return (
    <div>
      <h4 className="text-gray-200 text-sm text-center">
        Verify Your Identify (Takes Just 2 Minutes)
      </h4>

      <div className="flex flex-col items-start w-2/5 mx-auto text-gray-200 py-4">
        <p className="text-xs mb-4">
          Upload ID (NIN, Driver License, International Passport)
        </p>

        <div className="flex gap-3 items-center">
          <div className="bg-white rounded-md flex justify-between items-center text-black">
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-white rounded-md px-4 py-4 flex justify-between items-center text-gray-700"
            >
              <span className="text-xs">Upload File</span>
              <TbFileUpload className="ml-1" />
            </label>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="hidden"
              accept=".jpg,.jpeg,.png,.pdf"
            />
          </div>

          <span className="text-xs text-neutral-600 text-left">
            Supported formats include JPG, JPEG, PNG, PDF <br /> Max File Size:
            5MB
          </span>
        </div>

        <div className="flex items-center justify-center pt-4 pb-8">
          <input
            type="checkbox"
            id="terms"
            className="mr-2 w-fit"
            checked={agreeToTerms}
            onChange={() => setAgreeToTerms(!agreeToTerms)}
          />
          <label htmlFor="terms" className="text-xs text-gray-400">
            I confirm that I uploaded a valid government issued Photo ID.
          </label>
        </div>
      </div>

      <button className="bg-yellow-400 text-black text-sm rounded-lg px-6 py-2 hover:bg-yellow-500">
        Next Step
      </button>
    </div>
  )
}
