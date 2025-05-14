import { NoWinnerBox } from "@/src/components/common/no-winner-box";
import { motion } from "framer-motion";
import { useState } from "react";

export const HearFromOurWinners = () => {
  const [isWinnersEmpty, _] = useState(true);
  return (
    <section className="bg-[#0B0D24] py-20  px-6 relative overflow-hidden">
      {/* Confetti Overlay */}
      <img
        src="/images/confetti.png"
        alt="Confetti"
        className="absolute top-0 left-0 w-full h-auto z-0"
      />

      <motion.h2
        className="text-center text-white text-xl sm:text-2xl font-semibold mb-10 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hear From Our Winners
      </motion.h2>

      <div
        className={`${
          isWinnersEmpty ? "flex justify-center" : ""
        } w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto py-4 overflow-x-auto scrollbar-hide`}
      >
        {isWinnersEmpty ? (
          <div className="max-w-2xl">
            <NoWinnerBox />
          </div>
        ) : (
          <div className="flex gap-4">
            {[1, 2, 3, 4, 5].map((_, idx) => (
              <motion.div
                key={idx}
                className="w-4/5 md:w-1/3 bg-black shadow-[0px_4px_6px_rgba(0,0,0,0.4)] flex-shrink-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.3,
                  ease: "easeOut",
                }}
                style={{ marginRight: idx === 3 ? "0" : "1rem" }}
              >
                {/* Video Image Block */}
                <div className="relative">
                  <img
                    src="/images/video-thumbnail.png"
                    alt="Winner video thumbnail"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Winner Info */}
                <div className="bg-[#0b0d22] text-white p-2 flex items-center justify-center gap-4">
                  <img
                    src="/images/winner-badge.png"
                    alt="Winner badge"
                    className="w-16 lg:w-18 xl:w-32 h-16 lg:h-18 xl:h-32 object-contain"
                  />
                  <div className="flex flex-col align-center justify-center">
                    <p className="font-bold text-base text-center md:text-base xl:text-xl">
                      Abayomi Adewale
                    </p>
                    <p className="text-xs text-gray-400 text-center">
                      0803****430
                    </p>
                    <p
                      className="font-bold text-xl text-center md:text-2xl xl:text-3xl mt-2"
                      style={{
                        background:
                          "repeating-linear-gradient(to bottom, #FFD700, #dd7900, #FFD700 60%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "#FFD700", // Fallback solid color
                      }}
                    >
                      ₦5,000,000!
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
