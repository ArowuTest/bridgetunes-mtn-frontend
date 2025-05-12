import { MdClose } from "react-icons/md"
import { motion, AnimatePresence } from "framer-motion"
import { IoLogoWhatsapp } from "react-icons/io"
import { IoLogoFacebook } from "react-icons/io5"
import { FaXTwitter } from "react-icons/fa6"
import { IoLogoInstagram } from "react-icons/io"
import { BsTelegram } from "react-icons/bs"
import { BsThreads } from "react-icons/bs"

type ShareModalProps = {
  open: boolean
  handleClose: () => void
}
export const ShareModal = ({ open, handleClose }: ShareModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-2 md:px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-gray-900 text-white rounded-lg max-w-lg w-full p-5 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
              onClick={handleClose}
            >
              <MdClose />
            </button>

            <h2 className="text-lg font-semibold mb-8">Share your joy</h2>

            <div className="bg-gray-800 rounded-md p-3 text-sm text-white mb-5">
              "I just won ₦[Amount] in the MTN One Billion MAD Promo! You could
              be next! #MyNumbaDonWin #MTNNigeria"
            </div>

            <div className="flex items-center gap-2 md:gap-4 text-center text-sm pt-4 justify-around">
              <div className="flex flex-col items-center cursor-pointer">
                <IoLogoWhatsapp className="text-xl md:text-3xl mb-2" />
                <span className="text-xs text-neutral-400">Whatsapp</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <IoLogoFacebook className="text-xl md:text-3xl mb-2" />
                <span className="text-xs text-neutral-400">Facebook</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <FaXTwitter className="text-xl md:text-3xl mb-2" />
                <span className="text-xs text-neutral-400">X</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <IoLogoInstagram className="text-xl md:text-3xl mb-2" />
                <span className="text-xs text-neutral-400">Instagram</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <BsTelegram className="text-xl md:text-3xl mb-2" />
                <span className="text-xs text-neutral-400">Telegram</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer">
                <BsThreads className="text-xl md:text-3xl mb-2" />
                <span className="text-xs text-neutral-400">Threads</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
