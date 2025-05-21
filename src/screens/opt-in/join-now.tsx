import { formatPhone } from "@/src/utils/format-phone"
import { useState } from "react"
import { motion } from "framer-motion"
import { userAPI } from "@/src/network/api";

export const JoinNow = () => {
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const steps = [
    `Sending "JOIN" to 5050`,
    `Dialing *123*1#`,
    `Using the MyMTN app`,
  ];

  return (
    <section className="text-white overflow-hidden relative">
      <div className="w-full text-center bg-[url('/images/prizes/yellow-shine.jpg')] bg-no-repeat bg-cover bg-center bg-[#FFCC08] py-24 flex flex-col items-center justify-center px-2 md:px-0">
        <div className="absolute inset-0 bg-[url('/images/prizes/yellow-shine.jpg')] bg-no-repeat bg-cover bg-center opacity-90"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full gap-10">
          <motion.div
            className="text-center border-b border-black w-fit"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              style={{ fontFamily: "Montserrat" }}
              className="text-xl md:text-3xl font-bold mb-2 text-black"
            >
              Welcome To MTN Mega Billion Promo!
            </h1>
            <p className="text-black text-sm pb-4">MyNumba Don Win!</p>
          </motion.div>
          <motion.div
            className="mx-auto text-center w-full"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col mb-6 mx-auto items-center w-full">
              <p className="text-sm mb-2 text-black">You Can Also Opt-In By:</p>
              <div className="w-fit flex flex-col md:flex-row  justify-center items-center gap-4 md:gap-12">
                {steps.map((step, idx) => (
                  <div className="w-fit flex flex-start items-center">
                    <p className="bg-white text-[#FFCC08] py-3.5 px-2.5 rounded-lg">
                      {idx + 1}
                    </p>
                    <p className="bg-black py-2.5 px-3 text-sm rounded-lg">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-sm mt-5 text-black">
                <a
                  className="underline text-black cursor-pointer hover:text-black/80"
                  href="/terms-and-conditions"
                >
                  Terms and conditions
                </a>{" "}
                apply
              </p>
            </div>
          </motion.div>
          <div className="relative w-fit max-w-[85%] md:max-w-full">
            {/* Black moon-shaped left border */}
            <div className="absolute left-0 top-0 h-full w-10 bg-transparent rounded-l-full z-10 border-l-8 border-black"></div>

            {/* Main white pill container */}
            <div className="bg-white text-black font-semibold text-xs md:text-sm text-center px-6 py-2 pl-10 rounded-full relative">
              Every recharge give you a point, each point represents a ticket
              entry into the eligible draw
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
