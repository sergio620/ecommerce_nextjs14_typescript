import Input from "./Input";
export default function Sidebar() {
  const filter = [
    {
      name: "Categoria",
      attributes: [
        { title: "Todo", value: "all" },
        { title: "Zapatillas", value: "sneakers" },
        { title: "Zapatos planos", value: "flats" },
        { title: "Sandalias", value: "Sandalias" },
        { title: "Tacones", value: "Tacones" },
      ],
    },
    {
      name: "Precio",
      attributes: [
        { title: "Todo", value: "all" },
        { title: "0-50", value: "50" },
        { title: "50-100", value: "100" },
        { title: "100-150", value: "150" },
        { title: "Mayor a 150", value: "200" },
      ],
    },
    {
      name: "Color",
      attributes: [
        { title: "Todo", value: "all" },
        { title: "Negro", value: "negro" },
        { title: "Azul", value: "azul" },
        { title: "Rojo", value: "rojo" },
        { title: "Verde", value: "verde" },
      ],
    },
  ];
  return (
    <div className="flex flex-col bg-blue-500 w-[13%] overflow-y-scroll">
      {filter.map((item, index) => (
        <div key={index}>
          <div className="p-3">{item.name}</div>
          <div>
            {item.attributes.map((attribute, index) => (
              <Input
                key={index}
                title={attribute.title}
                name={item.name}
                value={attribute.value}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
