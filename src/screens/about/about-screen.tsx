import { childVariants, containerVariants } from "@/src/utils/motion"
import { FeatureCard } from "./feature-card"
import { motion } from "framer-motion"
import { keyFeatures } from "./data"
import { HowWeSelectWinners } from "./how-we-select-winners"

export const AboutScreen = () => {
  return (
    <div className="w-full bg-black text-white">
      {/* Hero Section */}
      <section className="w-full px-6 py-20 text-center bg-[url('/images/pattern-bg.png')] bg-no-repeat bg-cover bg-center bg-black/80">
        <motion.div
          className="bg-yellow-400 rounded-lg p-2 md:p-4 w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto flex flex-col md:flex-row gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full md:w-[40%] p-4 md:p-8 flex justify-center items-center"
            initial={{ x: "-20%", opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          >
            <img
              src="/images/my-number-win.png"
              alt="MyNumber Don Win"
              className="w-full md:w-full h-auto object-contain"
            />
          </motion.div>

          <motion.div
            className="flex flex-col text-left w-full md:w-[60%] p-8"
            initial={{ x: "20%", opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-black font-bold text-xl md:text-2xl">
              About MTN Mega Billion Promo
            </h2>
            <p className="text-black text-sm md:text-md mt-4 text-left">
              MTN Mega Billion Promo is an exciting promotion designed to reward
              MTN customers for their loyalty. Launched in partnership with
              Bridgetunes, this promotion gives MTN subscribers the chance to
              win amazing cash prizes simply by <b>Opting into the promo </b>
              and topping up their MTN lines.
            </p>

            <p className="text-black text-sm md:text-md mt-8 text-left">
              The promotion runs daily draws from Monday to Friday, with special
              higher-value draws every Saturday. With a transparent draw process
              and substantial prize pool, MTN Mega Billion Promo has quickly
              become one of the most popular promotions in Nigeria.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-6 bg-[#090F21] text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>

        <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto py-8 px-6">
          <p className="text-gray-400 text-sm text-left">
            Our mission is to create a fair, transparent, and exciting promotion
            that rewards MTN customers for their continued support. We believe
            in giving back to our community and creating opportunities for our
            customers to improve their lives through substantial cash prizes.
          </p>

          <p className="text-gray-400 text-sm text-left mt-8">
            We are committed to maintaining the highest standards of integrity
            in our draw process, ensuring that every participant has a fair
            chance to win based on the established rules and criteria.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-[url('/images/pattern-bg.png')] bg-no-repeat bg-cover bg-center bg-black/80 py-20 px-6">
        <motion.h2
          className="text-center text-2xl font-bold mb-6"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Key Features
        </motion.h2>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {keyFeatures.map((kf, idx) => (
            <motion.div key={idx} variants={childVariants}>
              <FeatureCard title={kf.title} description={kf.description} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How We Select Winners */}
      <HowWeSelectWinners
        header={
          <motion.h2
            className="text-center text-2xl font-bold mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            How We Select Winners
          </motion.h2>
        }
      />

      {/* About Cards */}
      <section className="py-20 px-6 bg-black bg-[url('/images/pattern-bg.png')] bg-no-repeat bg-cover bg-center bg-black/80 ">
        <motion.div
          className="grid md:grid-cols-2 gap-12 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto py-8 md:px-6"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-[#FFCC00] p-8 rounded-3xl text-black space-y-4">
            <img src="/images/mtn-logo-black.png" alt="MTN" className="w-1/3" />

            <h3 className="font-bold text-lg mb-2">About MTN Nigeria</h3>

            <div className="space-y-6">
              <p className="font-light text-sm text-neutral-800 leading-relaxed">
                MTN Nigeria is a leading provider of communication services,
                offering a wide range of voice, data, digital, and mobile
                financial services. As one of Nigeria's most admired brands, MTN
                is committed to delivering the benefits of modern connected life
                to customers across the country.
              </p>

              <p className="font-light text-sm text-neutral-800 leading-relaxed">
                With a customer base of over 70 million, MTN Nigeria continues
                to invest in expanding its network coverage and capacity to
                deliver consistent quality service nationwide. The company is
                dedicated to supporting Nigeria's development through various
                corporate social responsibility initiatives.
              </p>
            </div>
          </div>

          <div className="bg-[#0056B3] p-8 rounded-3xl text-white space-y-4">
            <img
              src="/images/bridgetune-logo-white.png"
              alt="MTN"
              className="w-2/3"
            />

            <h3 className="font-bold text-lg mb-2">About Bridgetunes</h3>

            <div className="space-y-6">
              <p className="font-light text-sm text-gray-300 leading-relaxed">
                Bridgetunes is a leading technology partner specializing in
                innovative digital solutions for telecommunications and
                marketing campaigns. With expertise in developing and managing
                promotional platforms, Bridgetunes has partnered with MTN
                Nigeria to create and operate the MyNumba Don Win promotion.
              </p>

              <p className="font-light text-sm text-gray-300 leading-relaxed">
                The Bridgetunes team brings years of experience in creating
                engaging, transparent, and user-friendly promotional campaigns
                that deliver value to both businesses and their customers.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
