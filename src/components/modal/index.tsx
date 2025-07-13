import { type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "./image";
import type { Car } from "./../../types/index";
import Info from "./info";

interface Props {
  isOpen: boolean;
  close: () => void;
  car: Car;
}

const Modal: FC<Props> = ({ isOpen, close, car }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md grid place-items-center z-50 p-4 ">
          <motion.div
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="car-details-dialog-panel w-[95%] sm:min-w[600px] h-fit overflow-auto"
            style={{ scrollbarWidth: "none" }}
          >
            <button
              onClick={close}
              name="close"
              className="car-details-close-btn cursor-pointer"
            >
              X
            </button>

            <Image car={car} />
            <Info car={car} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
