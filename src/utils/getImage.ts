import type { Car } from "./../types/index";

const getImage = (car: Car, angle: string): string => {
  const url = new URL("https://cdn.imagin.studio/getImage");
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model);
  url.searchParams.append("modelYear", car.year.toString());
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("angle", angle || "23"); // Default angle to 23 if not provided
  url.searchParams.append("randomPaint", "true");

  return url.href;
};

export default getImage;
