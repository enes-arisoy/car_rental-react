import { type FC, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Year: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [year, setYear] = useState<string | null>(searchParams.get("year") || null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (year) {
      searchParams.set("year", year);
    } else {
      searchParams.delete("year");
    }

    setSearchParams(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="carYear" className="text-white font-semibold mb-2 text-sm">Yıl</label>
      <div className="flex items-center">
        <input
          type="number"
          name="carYear"
          className="border border-white/20 rounded-l-2xl px-4  w-32 h-[52px] text-white "
          placeholder="örn: 2025"
          onChange={(e) => setYear(e.target.value)}
          value={year || ""}
        />
        <button
          type="submit"
          className="h-[52px] px-4  rounded-r-2xl border border-white/20  hover:bg-white/20 transition-all duration-300  hover:scale-105 cursor-pointer"
        >
          <img src="search.svg" alt="car-year-search-button" className="size-6" />
        </button>
      </div>
    </form>
  );
};

export default Year;
