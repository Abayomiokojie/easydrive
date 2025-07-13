import { CarProps, FilterProps } from "@types";
import { mockCars } from "@constants/mockCars";

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${
    window.location.pathname
  }?${newSearchParams.toString()}`;

  return newPathname;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//   const url = new URL("https://cdn.imagin.studio/getimage");
//   const { make, model, year } = car;

//   url.searchParams.append("customer", process.env.IMAGIN_API_KEY || "");
//   url.searchParams.append("make", make);
//   url.searchParams.append("modelFamily", model.split(" ")[0]);
//   url.searchParams.append("zoomType", "fullscreen");
//   url.searchParams.append("modelYear", `${year}`);
//   url.searchParams.append("zoomLevel", "");
//   url.searchParams.append("angle", `${angle}`);

//   return `${url}`;
// };

// lib/image.ts
export const generateCarImageUrl = (car: CarProps, angle: string = "01") => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", process.env.IMAGIN_API_KEY ?? "");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${car.year}`);
  url.searchParams.append("angle", angle);

  return url.toString();
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, fuel } = filters;
  // Filter the mockCars array based on the filters
  let cars = mockCars;
  if (manufacturer) {
    cars = cars.filter((car) =>
      car.make.toLowerCase().includes(manufacturer.toLowerCase())
    );
  }
  if (year && String(year).trim() !== "") {
    cars = cars.filter((car) => car.year === Number(year));
  }
  if (model) {
    cars = cars.filter((car) =>
      car.model.toLowerCase().includes(model.toLowerCase())
    );
  }
  if (fuel) {
    cars = cars.filter((car) =>
      car.fuel_type.toLowerCase().includes(fuel.toLowerCase())
    );
  }
  return cars;
  // (end of file)
}
