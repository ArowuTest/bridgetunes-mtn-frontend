import { motion } from "framer-motion";
import { PatternBG } from "@/src/components/common/pattern-bg";
import { WinnerTable } from "./winners-table";
import { NoWinnerBox } from "@/src/components/common/no-winner-box";
import { useState } from "react";

export const WinnersList = () => {
  const [isListEmpty, _] = useState(true);
  return (
    <PatternBG className="px-6 py-20 md:py-28">
      <motion.div
        className="flex flex-col justify-center items-center text-left p-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-200">
          Winners List
        </h2>

        <p className="text-white/70 text-sm md:text-md text-center">
          Below is a comprehensive list of all winners from our recent draws.
          Winners are announced daily after each draw is completed.
        </p>
      </motion.div>

      <div
        className={`${
          isListEmpty ? "flex justify-center" : ""
        } max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto py-8 px-6`}
      >
        {isListEmpty ? (
          <div className="max-w-2xl flex justify-center items-center">
            <NoWinnerBox />
          </div>
        ) : (
          <WinnerTable />
        )}
      </div>
    </PatternBG>
  );
};
