import { type FC, type FormEvent, useMemo, useState } from "react";
import ReactSelect from "react-select";
import { selectStyles } from "../../utils/constants";
import { makes } from "./../../utils/constants";
import { useSearchParams } from "react-router-dom";

const SearchBar: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [make, setMake] = useState<string | null>(
    searchParams.get("make") || null
  );
  const [model, setModel] = useState<string | null>(
    searchParams.get("model") || null
  );

  // useMemo ile component yeniden render edilmeden options oluşturuluyor
  const options = useMemo(
    () => makes.map((make) => ({ value: make, label: make })),
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (make) {
      searchParams.set("make", make);
    } else {
      searchParams.delete("make");
    }
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    setSearchParams(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar flex gap-4 items-end">
      <div className="searchbar-item items-end">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="make" className="text-white font-semibold mb-1 text-sm">Marka</label>
          <div className="w-full flex items-center">
            <ReactSelect
              value={make ? { value: make, label: make } : null}
              options={options}
              inputId="make"
              placeholder="Marka seçiniz"
              isSearchable={true}
              className="w-full min-w-[200px] z-20"
              styles={selectStyles}
              onChange={(option) => setMake(option?.value as string)}
            />
            <button className="ml-2  p-2 glass-effect rounded-xl hover:bg-white/20 transition-all duration-300  hover:scale-105 cursor-pointer">
              <img src="search.svg" alt="car-make-button" className="size-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="searchbar-item items-start flex flex-col">
        <label htmlFor="model" className="text-white font-semibold mb-3 text-sm">Model</label>
        <div className="w-full flex items-center">
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-2">
              <img src="model.png" alt="car-model-png" className="size-10"/>
            </div>
            <input
              value={model || ""}
              name="model"
              type="text"
              placeholder="Model yazınız"
              className="searchbar-input w-full"
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <button className="ml-2   p-2 glass-effect rounded-xl hover:bg-white/20 transition-all duration-300  hover:scale-105 cursor-pointer">
            <img src="search.svg" alt="model-search-button" className="size-6" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
