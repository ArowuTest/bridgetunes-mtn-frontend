import { motion } from "framer-motion";
import { DashboardDataInfo } from "./dashboard-data-info";
import { DashboardGraphInfo } from "./dashboard-graph-info";
import { DashboardCountdown } from "./dashboard-countdown";
import { DashboardNotificationCenter } from "./dashboard-notification-center";
import { Button } from "@/src/components/common/styles";
import { PiCertificateLight as CertificateIcon } from "react-icons/pi";

export const DashboardScreen = () => {
  return (
    <motion.div
      className="bg-black px-4 md:px-[10%] py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-row items-center justify-between"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200">
          Dashboard
        </h2>
        <Button
          variant="primary"
          type="submit"
          className="w-fit !py-2 !flex gap-2 items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #FFCC08, #FF9100) border-box",
            border: "2px solid transparent",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          <div className="w-[25px] h-[25px] p-1 bg-white border rounded-[50%] flex items-center justify-center">
            <CertificateIcon size={24} />
          </div>
          Winner’s Consent Form
        </Button>
      </motion.div>

      <DashboardDataInfo />
      <DashboardGraphInfo />
      <DashboardCountdown />
      <DashboardNotificationCenter />
    </motion.div>
  );
};
