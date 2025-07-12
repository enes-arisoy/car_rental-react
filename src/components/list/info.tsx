import type { FC } from "react";
import type { Car } from "./../../types/index";
import { SlCalender } from "react-icons/sl";
import { PiTire } from "react-icons/pi";
import { GiSteeringWheel } from "react-icons/gi";
import { motion } from "framer-motion";

interface Props {
  car: Car;
}

const Info: FC<Props> = ({ car }) => {
  const arr = [
    {
      icon: <GiSteeringWheel />,
      text: car?.trany || "Unknown",
    },
    {
      icon: <PiTire />,
      text: car?.drive || "Unknown",
    },
    {
      icon: <SlCalender />,
      text: car?.year || "Unknown",
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
      },
    }),
  };

  return (
    <div className="flex justify-between">
      {arr.map((item, key) => (
        <motion.div
          variants={variants}
          initial="hidden"
          custom={key}
          key={key}
          whileInView="visible"
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[22px] text-[#5db3fa]">{item.icon}</span>
          <p className="text-[12px] text-gray-500  text-center">{item.text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Info;
