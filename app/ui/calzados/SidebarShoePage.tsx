"use client";
import { ElementsSidebar } from "@/app/lib/definitions";
import Input from "./Input";
import { useShoeContext } from "./context/ShoeContext";

const elementsSidebar: ElementsSidebar = [
  {
    sectionTag: "Categoria",
    inputElements: [
      {
        inputTag: "Todo",
        value: "all",
        name: "category",
        id: "category",
      },
      {
        inputTag: "Zapatillas",
        value: "sneakers",
        name: "category",
        id: "category",
      },
      {
        inputTag: "Zapatos planos",
        value: "flats",
        name: "category",
        id: "category",
      },
      {
        inputTag: "Sandalias",
        value: "sandals",
        name: "category",
        id: "category",
      },
      {
        inputTag: "Tacones",
        value: "heels",
        name: "category",
        id: "category",
      },
    ],
  },
  {
    sectionTag: "Precio",
    inputElements: [
      { inputTag: "Todo", value: "all", name: "price", id: "price" },
      { inputTag: "0-50", value: "50", name: "price", id: "price" },
      { inputTag: "50-100", value: "100", name: "price", id: "price" },
      { inputTag: "100-150", value: "150", name: "price", id: "price" },
      {
        inputTag: "Mayor a 150",
        value: "200",
        name: "price",
        id: "price",
      },
    ],
  },
  {
    sectionTag: "Color",
    inputElements: [
      { inputTag: "Todo", value: "all", name: "color", id: "color" },
      { inputTag: "Negro", value: "black", name: "color", id: "color" },
      { inputTag: "Azul", value: "blue", name: "color", id: "color" },
      { inputTag: "Rojo", value: "red", name: "color", id: "color" },
      { inputTag: "Verde", value: "green", name: "color", id: "color" },
      {
        inputTag: "Blanco",
        value: "white",
        name: "color",
        id: "color",
      },
    ],
  },
];
export default function SidebarShoePage() {
  const { state } = useShoeContext();
  console.log("SidebarShoePage rendering");
  return (
    <div
      className={`hidden md:block transition-all overflow-hidden duration-500 ${
        state.isOpenSideFilter ? "w-[210px] " : "w-0 "
      } pt-12 flex flex-col`}
    >
      <div className="bg-gray-200">
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
