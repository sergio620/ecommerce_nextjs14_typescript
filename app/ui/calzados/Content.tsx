import React from "react";
import { fetchProducts } from "@/app/lib/data";
import Card from "../Card";
export default async function Content() {
  const { products } = await fetchProducts();
  return (
    <div className="p-5 grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-4">
      {/* https://www.youtube.com/watch?v=8K1N3fE-cDs min 4:50 Reason of question mark*/}
      {products.map((item, index) => {
        return (
          <Card
            key={index}
            id={item.id}
            name={item.title}
            image={item.thumbnail}
            new_price={item.price}
            old_price={Math.floor(
              (item.price * 100) / (100 - item.discountPercentage)
            )}
          />
        );
      })}
    </div>
  );
}
