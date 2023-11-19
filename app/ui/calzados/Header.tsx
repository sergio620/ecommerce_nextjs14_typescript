import React from "react";

export default function Header() {
  const filter = [
    {
      title: "Todos los productos",
      value: "all",
    },
    {
      title: "Nike",
      value: "nike",
    },
    {
      title: "Adidas",
      value: "adidas",
    },
    {
      title: "Puma",
      value: "puma",
    },
    {
      title: "Vans",
      value: "vans",
    },
  ];
  return (
    <div className="flex flex-col">
      <h2 className="recommended-title">Recomendado</h2>
      <div className="flex gap-2">
        {filter.map((item, index) => (
          <button
            key={index}
            /*   onClick={updateFilter} */
            className="btns"
            value={item.value}
            name="company"
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
