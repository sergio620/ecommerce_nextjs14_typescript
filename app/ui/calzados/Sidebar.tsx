import { ElementsSidebar } from "@/app/lib/definitions";
import Input from "./Input";

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

export default function Sidebar() {
  return (
    <div className="pl-3 flex flex-col bg-gray-200 w-[13%] ">
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
  );
}
