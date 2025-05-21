import classNames from "classnames"
import { motion } from "framer-motion"
import { whyJoin } from "./data"

export const WhyJoin = () => {
  return (
    <section className="bg-[#0B0D24] py-20 px-6 text-white">
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-semibold mb-16 text-gray-200 text-center"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Why Join MTN Mega Billion Promo?
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {whyJoin.map((benefit, idx) => (
          <motion.div
            key={idx}
            className={`relative overflow-hidden rounded-3xl p-12 flex items-start gap-4 ${benefit.bg}`}
            initial={{
              x: idx % 2 === 0 ? -50 : 50,
              y: idx < 2 ? -50 : 50,
              opacity: 0,
            }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div
              className={classNames(
                "w-2/3",
                idx === 0 || idx === 3 ? "text-black" : "text-gray-200"
              )}
            >
              <h3
                className={classNames(
                  "w-fit rounded-md px-2 font-bold mb-4 text-xl tracking-wide",
                  idx === 0 || idx === 3 ? "bg-[#0056B3]" : "bg-[#FFCC00]",
                  idx === 0 || idx === 3 ? "text-white" : "text-neutral-700"
                )}
              >
                {benefit.title}
              </h3>
              <p className="font-semibold text-sm md:text-lg">
                {benefit.label} -
              </p>
              <p className="font-extralight text-sm md:text-base mt-1">
                {benefit.desc}
              </p>
            </div>

            <div className="absolute bottom-0 right-0 flex-1 w-[35%] overflow-hidden">
              <img
                src={benefit.image}
                alt={benefit.label}
                className="w-full object-contain self-end"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
