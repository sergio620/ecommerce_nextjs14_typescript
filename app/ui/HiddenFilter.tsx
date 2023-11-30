"use client";
import React from "react";
import { ElementsSidebar } from "../lib/definitions";
import Input from "./calzados/Input";
import { useShoeContext } from "./calzados/context/ShoeContext";
import { FaTimes } from "react-icons/fa";

const elementsSidebar: ElementsSidebar = [
  {
    sectionTag: "Categoria",
    inputElements: [
      { inputTag: "Todo", value: "all", name: "category" },
      { inputTag: "Zapatillas", value: "sneakers", name: "category" },
      { inputTag: "Zapatos planos", value: "flats", name: "category" },
      { inputTag: "Sandalias", value: "sandals", name: "category" },
      { inputTag: "Tacones", value: "heels", name: "category" },
    ],
  },
  {
    sectionTag: "Precio",
    inputElements: [
      { inputTag: "Todo", value: "all", name: "price" },
      { inputTag: "0-50", value: "50", name: "price" },
      { inputTag: "50-100", value: "100", name: "price" },
      { inputTag: "100-150", value: "150", name: "price" },
      { inputTag: "Mayor a 150", value: "200", name: "price" },
    ],
  },
  {
    sectionTag: "Color",
    inputElements: [
      { inputTag: "Todo", value: "all", name: "color" },
      { inputTag: "Negro", value: "black", name: "color" },
      { inputTag: "Azul", value: "blue", name: "color" },
      { inputTag: "Rojo", value: "red", name: "color" },
      { inputTag: "Verde", value: "green", name: "color" },
      { inputTag: "Blanco", value: "white", name: "color" },
    ],
  },
];
export default function HiddenFilter() {
  const { state, dispatch } = useShoeContext();
  return (
    <div
      className={`bg-slate-50/90 ${
        state.isOpenSideFilter ? "left-0 " : "-left-1/2 "
      }top-0 w-1/2 fixed md:hidden transition-all duration-500 z-40`}
    >
      <button
        className="h-11"
        onClick={() => {
          dispatch({ type: "sideHiddenFilter" });
        }}
      >
        <FaTimes className="block h-5 w-10 " />
      </button>
      <div
        className={`${
          state.isOpenSideFilter ? "block " : ""
        }pl-3 flex flex-col`}
      >
        {elementsSidebar.map((item, index) => (
          <div key={index} className="border-t border-gray-500">
            <div className="p-3 font-bold">{item.sectionTag}</div>
            <div>
              {item.inputElements.map((element, index) => (
                <Input
                  key={index}
                  inputTag={element.inputTag}
                  name={element.name}
                  value={element.value}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
