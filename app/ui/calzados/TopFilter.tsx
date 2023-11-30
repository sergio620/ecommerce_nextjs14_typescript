"use client";
import React from "react";
import { useShoeContext } from "./context/ShoeContext";
import { Name, Value } from "@/app/lib/definitions";

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
//asegurar que el elemento input tiene la propiedad "e.currentTarget.name" y que esta es igual a los valores contenidos del type "Name"
function assertNameIsDefined(name: any): asserts name is Name {
  if (name === undefined || name === null) {
    throw new Error("e.currentTarget.name is undefined or null");
  }
}
//asegurar que el elemento input tiene la propiedad "e.currentTarget.value" y que esta es igual a los valores contenidos del type "Value"
function assertValueIsDefined(value: any): asserts value is Value {
  if (value === undefined || value === null) {
    throw new Error("e.currentTarget.value is undefined or null");
  }
}
export default function TopFilter() {
  const { dispatch } = useShoeContext();
  return (
    <div className="flex flex-col grow">
      <h2 className="font-bold text-xl mb-3">Recomendado</h2>
      <div className="flex gap-4 whitespace-nowrap flex-wrap">
        {filter.map((item, index) => (
          <button
            key={index}
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              let name = e.currentTarget.name;
              let value = e.currentTarget.value;
              assertNameIsDefined(name);
              assertValueIsDefined(value);
              dispatch({
                type: "clickedInput",
                name: name,
                //https://stackoverflow.com/questions/66485576/property-value-does-not-exist-on-type-eventtarget-ts2339
                value: value,
              });
            }}
            className="focus:bg-sky-300 border border-gray-300 rounded p-3 "
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
