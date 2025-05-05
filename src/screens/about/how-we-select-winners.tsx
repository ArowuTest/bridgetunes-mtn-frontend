import { motion } from "framer-motion"

type HowWeSelectWinnersProps = {
  header: React.ReactNode
}
export const HowWeSelectWinners = ({ header }: HowWeSelectWinnersProps) => {
  return (
    <section className="py-20 px-6 bg-[#090F21]">
      {header}

      <motion.div
        className="flex flex-col md:flex-row items-stretch gap-10 lg:gap-16 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto md:h-[320px]"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src="/images/winner.png"
          alt="Winner"
          className="md:w-1/3 h-full object-contain"
        />

        <article className="space-y-8 h-full font-light">
          <p className="text-gray-400 text-md leading-relaxed">
            Our draw process is designed to be completely fair and transparent.
            Winners are selected using a random number generator that picks from
            the pool of eligible participants. For daily draws, numbers are
            filtered based on the last digit (Monday draws for numbers ending in
            0 & 1, Tuesday for 2 & 3, etc.).
          </p>

          <p className="text-gray-400 text-md leading-relaxed">
            All draws are conducted under the supervision of regulatory
            authorities to ensure compliance with all applicable laws and
            regulations. Winners are notified via SMS and announced on our
            website and social media channels.
          </p>

          <p className="text-gray-400 text-md leading-relaxed">
            For the jackpot prize, winners must have opted in to be eligible. If
            a non-opted-in participant is selected for the jackpot, the prize
            rolls over to the next draw, increasing the potential winnings.
          </p>
        </article>
      </motion.div>
    </section>
  )
}
