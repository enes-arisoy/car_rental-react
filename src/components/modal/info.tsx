import { type FC } from "react";
import type { Car } from "./../../types/index";
import formatData from "./../../utils/formatData";

interface Props {
  car: Car;
}
const Info: FC<Props> = ({ car }) => {
  return (
    <div className="flex-1 flex flex-col gap-3 ">
      <h3 className="text-2xl font-bold text-gradient mb-3">
        {car.make} / {car.model}
      </h3>

      {formatData(car).map(([key, value]) => {
        return (
          <div className="flex justify-between items-center py-3 px-4 rounded-xl border border-white/10 glass-dark min-w-[300px] overflow-clip scrollbar-hide">
            <span className="capitalize text-grey-light font-medium">
              {key}:{" "} 
            </span>
            <span className="capitalize font-semibold text-blue-200 whitespace-nowrap">
              {value === "Y" || value === "T"
                ? "Var"
                : value === "N"
                ? "Yok"
                : value || "-"}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
