import { type FC } from "react";
import type { Car } from "./../../types/index";
import getImage from './../../utils/getImage';

interface Props {
  car: Car;
}

const Image: FC<Props> = ({ car }) => {
  return (
    <div className="flex-1 flex flex-col gap-1">
      <div className="flex items-center justify-center w-full h-64 ">
        <img
          src={getImage(car, "23")}
          alt="modal-car-photo"
          className="object-contain size-100 rounded-md"
        />
      </div>

      <div className="flex gap-3 ">
        <div className="rounded-xl flex-1 flex relative h-30 border border-white/20">
          <img
            src={getImage(car, "01")}
            alt="modal-cars"
            className="object-contain mx-auto"
          />
        </div>
        <div className="rounded-xl flex-1 flex relative h-30 border border-white/20">
          <img
            src={getImage(car, "21")}
            alt="modal-cars"
            className="object-contain mx-auto"
          />
        </div>
        <div className="rounded-xl flex-1 flex relative h-30 border border-white/20">
          <img
            src={getImage(car, "09")}
            alt="modal-cars"
            className="object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Image;
