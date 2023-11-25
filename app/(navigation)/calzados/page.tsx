import Sidebar from "../../ui/calzados/Sidebar";
import TopFilter from "@/app/ui/calzados/TopFilter";
import { Suspense } from "react";
import ContentShoeSkeleton from "@/app/ui/skeletons";
import PopulateShoes from "@/app/ui/calzados/PopulateShoes";

export default async function Calzados() {
  return (
    <div className="flex">
      <Sidebar />
      <section className="grow">
        <TopFilter />
        <Suspense fallback={<ContentShoeSkeleton />}>
          <PopulateShoes />
        </Suspense>
      </section>
    </div>
  );
}
