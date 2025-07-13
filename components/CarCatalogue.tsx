"use client";

import { useState, useEffect } from "react";
import { CustomFilter, SearchBar, CarCard } from "@/components";
import { fuels, yearsOfProduction } from "@constants";
import ShowMore from "@components/ShowMore";
import { generateCarImageUrl } from "@lib/image";
import { CarProps } from "@types";

const CarCatalogue = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    manufacturer: "",
    year: "",
    fuel: "",
    model: "",
  });
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const params = new URLSearchParams();
        if (filters.manufacturer)
          params.append("manufacturer", filters.manufacturer);
        if (filters.year) params.append("year", String(filters.year));
        if (filters.fuel) params.append("fuel", filters.fuel);
        if (filters.model) params.append("model", filters.model);
        const res = await fetch(`/api/cars?${params.toString()}`);
        if (!res.ok) throw new Error("Failed to fetch cars");
        const allCarsRaw = await res.json();
        const allCars = allCarsRaw.map((car: CarProps) => ({
          ...car,
          imageUrl: generateCarImageUrl(car),
        }));
        setCars(allCars);
      } catch (err: any) {
        setError("Failed to fetch cars");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [filters]);

  const handleSearch = (searchParams: any) => {
    setFilters((prev) => ({ ...prev, ...searchParams }));
    setLimit(10);
  };

  const handleFilter = (type: string, value: any) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
    setLimit(10);
  };

  const handleShowMore = () => {
    setLimit((prev) => prev + 10);
  };

  const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;
  const visibleCars = cars.slice(0, limit);

  return (
    <div
      className="-mt-24 sm:mt-0 md:mt-12 padding-x padding-y max-width"
      id="discover"
    >
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore out cars you might like</p>
      </div>

      <div className="home__filters">
        <SearchBar onSearch={handleSearch} />
        <div className="home__filter-container">
          <CustomFilter
            title="fuel"
            options={fuels}
            onChange={(val: any) => handleFilter("fuel", val)}
          />
          <CustomFilter
            title="year"
            options={yearsOfProduction}
            onChange={(val: any) => handleFilter("year", val)}
          />
        </div>
      </div>

      {loading ? (
        <div className="home__error-container">Loading...</div>
      ) : error ? (
        <div className="home__error-container">{error}</div>
      ) : !isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {visibleCars.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
          <ShowMore
            pageNumber={limit / 10}
            isNext={limit < cars.length}
            onClick={handleShowMore}
          />
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
        </div>
      )}
    </div>
  );
};

export default CarCatalogue;
