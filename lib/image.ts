import { CarProps } from "@types";

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
