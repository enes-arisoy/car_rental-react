import { type FC } from "react";
import SearchBar from "./searchbar";
import Year from "./year";

const Filter: FC = () => {
  return (
    <div className="mt-15 padding-x padding-y max-width">
      <div className="home-text-container gap-4">
        <h1 className="text-4xl font-bold text-gradient">Araba Kataloğu</h1>

        <p className="text-xl text-grey-light">Araçları Keşfet</p>
      </div>
      <div className="home-filters">
        <SearchBar />
        <div className="home-filter-container">
          <Year />
        </div>
      </div>
    </div>
  );
};

export default Filter;
