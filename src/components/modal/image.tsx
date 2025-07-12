import { type FC } from "react";
import type { Car } from "./../../types/index";
import getImage from './../../utils/getImage';

interface Props {
  car: Car;
}

const Image: FC<Props> = ({ car }) => {
  return (
    <div className="flex-1 flex flex-col gap-1">
      <div className="w-full h-[50] mb-3">
        <img
          src={getImage(car, "23")}
          alt="modal-car-photo"
          className="object-cover w-full h-full rounded-md"
        />
      </div>

      <div className="flex gap-3 ">
        <div className="rounded flex-1 flex relative h-30 bg-primary-blue-100">
          <img
            src={getImage(car, "01")}
            alt="modal-cars"
            className="object-contain mx-auto"
          />
        </div>
        <div className="rounded flex-1 flex relative h-30 bg-primary-blue-100">
          <img
            src={getImage(car, "21")}
            alt="modal-cars"
            className="object-contain mx-auto"
          />
        </div>
        <div className="rounded flex-1 flex relative h-30 bg-primary-blue-100">
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
