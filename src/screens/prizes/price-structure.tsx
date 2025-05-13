import { motion } from "framer-motion";
import { PriceStructureTable } from "./price-structure-table";

export const PriceStructure = () => {
  return (
    <section className="py-16 px-6 bg-[#090F21] text-center">
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 text-gray-200"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Price Structure
      </motion.h2>

      <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto py-8 px-0 md:px-6">
        <PriceStructureTable />
      </div>
    </section>
  );
};
