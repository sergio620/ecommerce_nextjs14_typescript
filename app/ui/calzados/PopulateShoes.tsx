"use client";
import { fetchShoes } from "@/app/lib/data";
import CardShoe from "@/app/ui/calzados/CardShoe";
import { useEffect } from "react";
import { useShoeContext } from "./context/ShoeContext";

export default function PopulateShoes() {
  const { state, dispatch } = useShoeContext();
  console.log("state.selectedFilter: ", state.selectedFilter);
  console.log("state.inputSearchBox: ", state.inputSearchBox);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchShoes(state);
      dispatch({ type: "afterFetchData", payload: data });
    }
    fetchData();
  }, [
    state.selectedFilter.category,
    state.selectedFilter.color,
    state.selectedFilter.price,
    state.selectedFilter.company,
    state.switchToFetchData,
  ]);

  useEffect(() => {
    async function firstfetchData() {
      const firstDatafetch = await fetchShoes();
      dispatch({
        type: "firstFetchShoePage",
        firstFetchShoes: firstDatafetch,
      });
    }
    firstfetchData();
  }, []);

  return (
    <div className="grow transition-all duration-500 p-12 grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-5">
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
