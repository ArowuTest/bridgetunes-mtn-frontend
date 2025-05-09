import { motion } from "framer-motion"
import { useState } from "react"
import { FaHistory, FaInfoCircle, FaPlay } from "react-icons/fa"

export const LivestreamWidget = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <section className="bg-[#090F21]">
      <div className="flex flex-col justify-center text-left bg-black px-4 md:px-[11%] py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200">
            Livestream Schedule
          </h2>

          <p className="text-sm text-gray-400 pt-6">
            Watch our daily and weekly draws live to see winners selected in
            real-time! All draws are conducted transparently under the
            supervision of regulatory authorities. Tune in every weekday at 7:00
            PM WAT and Saturdays at 7:00 PM WAT for our special draws.
          </p>
        </motion.div>
      </div>

      <section className="py-16 px-4 bg-[#090F21] max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-start w-full">
            <h2 className="mt-4 text-lg font-semibold text-gray-300">
              MTN MyNumba Don Win Live Draw
            </h2>
            <p className="text-sm text-gray-500">
              Click to watch our latest live draw session
            </p>
          </div>

          <div className="relative w-full aspect-video pt-8">
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID&autoplay=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full bg-gray-800 text-gray-200">
                <button
                  className="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full text-black hover:bg-yellow-600"
                  onClick={handlePlayClick}
                >
                  <FaPlay className="w-6 h-6" />
                </button>
              </div>
            )}
          </div>

          <div className="w-full bg-[#FFCC00]">
            <div className="flex flex-col items-center sm:flex-row sm:justify-between px-4 py-2">
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-bold text-gray-800">
                  Daily Draw - Friday (April 25, 2025)
                </h3>
                <p className="text-xs text-gray-800">Live at 7:00 PM WAT</p>
              </div>

              <div className="flex mt-4 space-x-4 sm:mt-0">
                <button className="flex items-center px-4 py-2 text-xs font-light text-gray-200 bg-blue-700 rounded hover:bg-blue-600">
                  <FaHistory className="mr-2" />
                  Past Draws
                </button>
                <button className="flex items-center px-4 py-2 text-xs font-light text-gray-200 bg-blue-700 rounded hover:bg-blue-600">
                  <FaInfoCircle className="mr-2" />
                  How It Works
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
