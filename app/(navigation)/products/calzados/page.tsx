"use client";
import Sidebar from "../../../ui/calzados/Sidebar";
import TopFilter from "@/app/ui/calzados/TopFilter";
import { Suspense } from "react";
import ContentShoeSkeleton from "@/app/ui/skeletons";
import PopulateShoes from "@/app/ui/calzados/PopulateShoes";
import { useShoeContext } from "@/app/ui/calzados/context/ShoeContext";
import HiddenFilter from "@/app/ui/HiddenFilter";

export default function Calzados() {
  const { dispatch } = useShoeContext();
  return (
    <div>
      <div className="flex items-end gap-5">
        <div className="ml-12 w-[13%]">
          <button
            className="hover:bg-gray-300 p-3 font-bold border border-gray-300 rounded text-center"
            onClick={() => dispatch({ type: "sideHiddenFilter" })}
          >
            Filtros
          </button>
        </div>
        <TopFilter />
      </div>
      <HiddenFilter />
      <div className="flex">
        <Sidebar />
        <Suspense fallback={<ContentShoeSkeleton />}>
          <PopulateShoes />
        </Suspense>
      </div>
    </div>
  );
}
