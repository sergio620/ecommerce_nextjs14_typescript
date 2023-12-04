"use client";
import React from "react";
import { useShoeContext } from "./context/ShoeContext";
import { Id, Value } from "@/app/lib/definitions";
import Link from "next/link";

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
      <div className="grid grid-cols-2 md:flex md:flex-row gap-4 whitespace-wrap">
        {filter.map((item, index) => (
          <button
            key={index}
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              let Value = e.currentTarget.value;
              assertValueIsDefined(Value);
              dispatch({
                type: "clickedInput",
                id: "company",
                //https://stackoverflow.com/questions/66485576/property-value-does-not-exist-on-type-eventtarget-ts2339
                value: Value,
              });
            }}
            className="focus:bg-sky-300 border border-gray-300 rounded p-3 hover:bg-gray-300"
            value={item.value}
            name="company"
            id="company"
          >
            {item.inputTag}
          </button>
        ))}
        <Link href={"/products/calzados"}>
          <button
            className="font-bold p-3 hover:rounded hover:bg-gray-300"
            onClick={() => dispatch({ type: "clearFilter" })}
          >
            Limpiar filtros
          </button>
        </Link>
      </div>
    </div>
  );
}
