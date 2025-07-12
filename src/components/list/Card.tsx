import { useState, type FC } from "react";
import type { Car } from "./../../types/index";
import { getPrice } from "./../../utils/getPrice";
import Info from "./info";
import Button from "./../button/index";
import { motion } from "framer-motion";
import Modal from "../modal";
import getImage from './../../utils/getImage';


interface Props {
  car: Car;
}

const Card: FC<Props> = ({ car }) => {
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <>
      <div className="car-card group">
        <h2>
          {car.make} - {car.model}
        </h2>
        <div className="flex mt-6 text-[19px]">
          <span className="text-[32px]">{getPrice(car)}</span>
          <span className="font-semibold">₺</span>
          <span className="font-semibold self-end">/gün</span>
        </div>

        <div>
          <img
            src={getImage(car, "23")}
            alt="card-car-photo"
            className="w-full object-contain min-h-[200px]"
          />
        </div>

        <div className="w-full ">
          <div className="group-hover:hidden">
            <Info car={car} />
          </div>

          <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            className="hidden group-hover:block"
          >
            <Button
              text="Daha Fazla"
              designs="w-full text-white mt-[0.5px]"
              fn={() => setModelOpen(true)}
            />
          </motion.div>
        </div>
      </div>
      <Modal car={car} isOpen={modelOpen} close={() => setModelOpen(false)} />
    </>
  );
};

export default Card;
