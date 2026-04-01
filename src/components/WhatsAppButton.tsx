import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210";

  return (
    <motion.a
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent("Hi! I'd like to place an order from Apurva Sweets & Bakery.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full flex items-center justify-center shadow-lg whatsapp-pulse cursor-pointer"
      style={{ backgroundColor: "#25D366" }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} color="#fff" />
    </motion.a>
  );
};

export default WhatsAppButton;
