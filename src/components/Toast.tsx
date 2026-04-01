import { AnimatePresence, motion } from "framer-motion";
import { useStore } from "@/hooks/useStore";
import { FiCheck } from "react-icons/fi";

const Toast = () => {
  const { toast } = useStore();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 50, x: "-50%" }}
          className="fixed bottom-6 left-1/2 z-[100] glass-dark text-primary-foreground px-6 py-3 rounded-full flex items-center gap-2 shadow-premium"
        >
          <FiCheck className="text-accent" /> {toast}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
