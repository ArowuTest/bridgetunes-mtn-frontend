import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"
import { MdClose } from "react-icons/md"

type WinnerModalProps = {
  open: boolean
  handleClose: () => void
}
export const WinnerModal = ({ open, handleClose }: WinnerModalProps) => {
  const { push } = useRouter()

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-2 md:px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-[url('/images/confetti.png')] bg-cover text-white rounded-lg max-w-lg w-full p-5 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
              onClick={handleClose}
            >
              <MdClose />
            </button>

            <div className=" text-white">
              <p className="uppercase font-bold text-lg">Congratulations!</p>
              <p className="uppercase font-bold text-3xl">You've Won!</p>
              <p
                className="font-bold text-3xl text-center md:text-4xl xl:text-6xl mt-2"
                style={{
                  background:
                    "repeating-linear-gradient(to bottom, #FFD700, #dd7900, #FFD700 60%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "#FFD700", // Fallback solid color
                }}
              >
                ₦1,000,000!
              </p>
            </div>

            <div className="flex items-center text-center pt-4 justify-around">
              <div className="flex flex-col items-center cursor-pointer">
                <p className="text-lg mb-4">
                  Your Life Just Changed In An Instant!
                </p>

                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black text-xs  px-6 py-2 rounded-lg"
                  onClick={() => push("/claim-prize")}
                >
                  Here's how to claim your pirze
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
