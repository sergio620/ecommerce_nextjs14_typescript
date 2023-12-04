"use client";
import { ElementsSidebar } from "../../lib/definitions";
import Input from "./Input";
import { useShoeContext } from "./context/ShoeContext";
import { FaTimes } from "react-icons/fa";

const elementsSidebar: ElementsSidebar = [
  {
    sectionTag: "Categoria",
    inputElements: [
      {
        inputTag: "Todo",
        value: "all",
        name: "hidden category",
        id: "category",
      },
      {
        inputTag: "Zapatillas",
        value: "sneakers",
        name: "hidden category",
        id: "category",
      },
      {
        inputTag: "Zapatos planos",
        value: "flats",
        name: "hidden category",
        id: "category",
      },
      {
        inputTag: "Sandalias",
        value: "sandals",
        name: "hidden category",
        id: "category",
      },
      {
        inputTag: "Tacones",
        value: "heels",
        name: "hidden category",
        id: "category",
      },
    ],
  },
  {
    sectionTag: "Precio",
    inputElements: [
      { inputTag: "Todo", value: "all", name: "hidden price", id: "price" },
      { inputTag: "0-50", value: "50", name: "hidden price", id: "price" },
      { inputTag: "50-100", value: "100", name: "hidden price", id: "price" },
      { inputTag: "100-150", value: "150", name: "hidden price", id: "price" },
      {
        inputTag: "Mayor a 150",
        value: "200",
        name: "hidden price",
        id: "price",
      },
    ],
  },
  {
    sectionTag: "Color",
    inputElements: [
      { inputTag: "Todo", value: "all", name: "hidden color", id: "color" },
      { inputTag: "Negro", value: "black", name: "hidden color", id: "color" },
      { inputTag: "Azul", value: "blue", name: "hidden color", id: "color" },
      { inputTag: "Rojo", value: "red", name: "hidden color", id: "color" },
      { inputTag: "Verde", value: "green", name: "hidden color", id: "color" },
      {
        inputTag: "Blanco",
        value: "white",
        name: "hidden color",
        id: "color",
      },
    ],
  },
];
export default function HiddenFilterShoePage() {
  const { state, dispatch } = useShoeContext();
  console.log("HiddenFilterShoePage rendering: ");

  return (
    <div
      className={`bg-slate-50/90 ${
        state.isOpenSideFilter ? "w-1/2 " : "w-0 "
      }top-0 left-0 fixed md:hidden transition-all h-screen duration-500 z-40 overflow-y-scroll`} //no usar hidden (display: none) mejor usar width 0px o w-0 para luego realizar transiciones de 0px a 100%
    >
      <button
        className="h-11"
        onClick={() => {
          dispatch({ type: "sideHiddenFilter" });
        }}
      >
        <FaTimes className="block h-5 w-10 " />
      </button>
      <div className={`pl-3 flex flex-col`}>
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
                  id={element.id}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
