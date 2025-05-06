import { useState } from "react"
import { ShareModal } from "./share-modal"

export const StepThree = () => {
  const [shareJoy, setShareJoy] = useState(false)

  return (
    <div className="flex flex-col items-center space-y-8 mx-auto w-1/2">
      <div>
        <h4 className="text-gray-200 text-2xl text-center">Complete</h4>
        <p className="text-sm my-2 capitalize text-gray-300">
          Receive your prize within 48 hours
        </p>
      </div>

      <div className="flex gap-6">
        <button className="rounded-lg py-2 px-8 bg-yellow-400 text-black hover:bg-yellow-500 text-sm">
          Go to Dashboard
        </button>
        <button
          className="rounded-lg py-2 px-8 bg-blue-700 hover:bg-blue-800 text-white text-sm"
          onClick={() => setShareJoy(true)}
        >
          Share Your Joy
        </button>
      </div>

      <p className="text-white text-xs font-semibold capitalize">
        Need Help? contact our winner support team at [Contact]
      </p>

      {shareJoy && (
        <ShareModal open={shareJoy} handleClose={() => setShareJoy(false)} />
      )}
    </div>
  )
}
