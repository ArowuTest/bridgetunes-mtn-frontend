import { motion } from "framer-motion"

export const JoinOurWinners = () => {
  return (
    <section className="py-14">
      <motion.div
        className="bg-[#FFCC00] rounded-2xl w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto flex items-center  border-l-8 border-l-white"
        initial={{ opacity: 0, y: "-90%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-left py-2 px-8">
          <strong>Join our winners!</strong> Opt-in now and top up your MTN line
          to participate in our daily and weekly draws. You could be our next
          big winner!
        </p>
      </motion.div>
    </section>
  )
}
