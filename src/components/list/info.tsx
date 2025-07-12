import type { FC } from "react";
import type { Car } from "./../../types/index";
import { MdOutlineTimer } from "react-icons/md";
import { GoGear  } from "react-icons/go";
import { PiEngineBold } from "react-icons/pi";
import { motion } from "framer-motion";

interface Props {
  car: Car;
}

const Info: FC<Props> = ({ car }) => {
  const arr = [
    {
      icon: <PiEngineBold />,
      text: car?.trany || "Unknown",
    },
    {
      icon: <GoGear />,
      text: car?.drive || "Unknown",
    },
    {
      icon: <MdOutlineTimer />,
      text: car?.year || "Unknown",
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
      },
    }),
  };

  return (
    <div className="flex justify-around">
      {arr.map((item, key) => (
        <motion.div
          variants={variants}
          initial="hidden"
          custom={key}
          key={key}
          whileInView="visible"
          className="flex flex-col items-center gap-1"
        >
          <span className="sm:text-[28px] text-3xl text-[#367deec4]">{item.icon}</span>
          <p className="sm:text-[17px] text-[14px] text-blue-300  text-center">{item.text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Info;
