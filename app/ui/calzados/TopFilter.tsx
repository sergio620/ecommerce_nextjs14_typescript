"use client";
import React from "react";
import { useShoeContext } from "./context/ShoeContext";

const filter = [
  {
    inputTag: "Todos los productos",
    value: "all",
  },
  {
    inputTag: "Nike",
    value: "nike",
  },
  {
    inputTag: "Adidas",
    value: "adidas",
  },
  {
    inputTag: "Puma",
    value: "puma",
  },
  {
    inputTag: "Vans",
    value: "vans",
  },
];

export default function TopFilter() {
  const { dispatch } = useShoeContext();
  return (
    <div className="flex flex-col">
      <h2 className="recommended-title">Recomendado</h2>
      <div className="flex gap-2">
        {filter.map((item, index) => (
          <button
            key={index}
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              dispatch({
                type: "updateFilter",
                name: e.currentTarget.name,
                //https://stackoverflow.com/questions/66485576/property-value-does-not-exist-on-type-eventtarget-ts2339
                value: e.currentTarget.value,
              })
            }
            className="btns"
            value={item.value}
            name="company"
          >
            {item.inputTag}
          </button>
        ))}
      </div>
    </div>
  );
}
