import { useEffect, useRef, useState, type FC } from "react";
import { fetchCars } from "./../../utils/service";
import ReactPaginate from "react-paginate";
import type { Car } from "./../../types/index";
import Card from "./Card";
import Warning from "./warning";
import Loader from "./../loader/index";
import { useSearchParams } from "react-router-dom";

const List: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cars, setCars] = useState<Car[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const firstCard = useRef<HTMLDivElement>(null);

  const make = searchParams.get("make") || "";
  const model = searchParams.get("model") || "";
  const yearParam = searchParams.get("year");
  const year = Number(yearParam);
  const page = searchParams.get("page") || "1";

  useEffect(() => {
    setLoading(true);

    fetchCars(make, model, year, page)
      .then((data) => {
        setTotalCount(data.total_count);
        setCars(data.results);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [make, model, year, page]);

  if (loading) {
    return (
      <Warning>
        <Loader />
      </Warning>
    );
  }
  if (error) {
    return <Warning>Error: {error}</Warning>;
  }
  if (!cars || cars.length === 0) {
    return <Warning>No cars found.</Warning>;
  }

  return (
    <div className="padding-x max-width">
      <section className="home-cars-wrapper">
        <div ref={firstCard} className="absolute"/>
        {cars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </section>
      <div>
        {totalCount && (
          <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel=">"
            initialPage={Number(page) - 1}
            onPageChange={(e) => {
              searchParams.set("page", String(e.selected + 1));
              setSearchParams(searchParams);

              if (firstCard.current && page !== "1") {
                firstCard.current.scrollIntoView()
              }
            }}
            pageRangeDisplayed={5}
            pageCount={Math.ceil(totalCount / 10)}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        )}
      </div>
    </div>
  );
};

export default List;
