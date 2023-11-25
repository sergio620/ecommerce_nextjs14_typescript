"use client";
import { fetchShoes } from "@/app/lib/data";
import CardShoe from "@/app/ui/calzados/CardShoe";
import { useEffect } from "react";
import { useState } from "react";
import { useShoeContext } from "./context/ShoeContext";

export default async function PopulateShoes() {
  const { state, dispatch } = useShoeContext();
  useEffect(() => {
    async function fetchData() {
      const data = await fetchShoes();
      dispatch({ type: "updateData", payload: data });
    }
    fetchData();
  }, [state.category, state.color, state.price, state.company]);
  return (
    <div className="p-12 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-10">
      {/* https://www.youtube.com/watch?v=8K1N3fE-cDs min 4:50 Reason of question mark*/}
      {state.data.map((item, index) => {
        return (
          <CardShoe
            key={index}
            id={item._id}
            img={item.img}
            title={item.title}
            reviews={item.reviews}
            prevPrice={item.prevPrice}
            newPrice={item.newPrice}
          />
        );
      })}
    </div>
  );
}
