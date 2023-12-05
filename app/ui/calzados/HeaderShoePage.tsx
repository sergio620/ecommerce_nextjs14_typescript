"use client";
import React from "react";
import { IoFilter } from "react-icons/io5";
import TopFilter from "./TopFilter";
import { useShoeContext } from "./context/ShoeContext";
export default function HeaderShoePage() {
  const { dispatch } = useShoeContext();
  return (
    <div className="flex justify-center items-end gap-5">
      <div className="md:ml-12 md:w-[13%]">
        <button
          className="flex gap-2 items-center hover:bg-gray-300 p-3 font-bold border border-gray-300 rounded text-center"
          onClick={() => dispatch({ type: "sideHiddenFilter" })}
        >
          <IoFilter />
          Filtros
        </button>
      </div>
      <TopFilter />
    </div>
  );
}
