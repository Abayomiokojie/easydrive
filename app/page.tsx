// "use client";

import { Hero } from "@/components";
import CarCatalogue from "@/components/CarCatalogue";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <CarCatalogue />
    </main>
  );
}
