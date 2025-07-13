import { NextRequest, NextResponse } from "next/server";
import { fetchCars } from "@utils";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const manufacturer = searchParams.get("manufacturer") || "";
  const yearParam = searchParams.get("year");
  const year = yearParam && yearParam.trim() !== "" ? Number(yearParam) : undefined;
  const fuel = searchParams.get("fuel") || "";
  const limit = Number(searchParams.get("limit")) || 10;
  const model = searchParams.get("model") || "";

  try {
    const cars = await fetchCars({ manufacturer, year, fuel, limit, model });
    if (!cars || !Array.isArray(cars)) {
      return NextResponse.json([]);
    }
    return NextResponse.json(cars);
  } catch (error) {
    // Instead of returning an error, return an empty array
    return NextResponse.json([]);
  }
}
