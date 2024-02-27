"use client";
import Link from "next/link";
import Image from "next/image";
import { useShoeContext } from "./calzados/context/ShoeContext";

export default function Card(props: Record<string, any>) {
  const { dispatch } = useShoeContext();
  console.log("Card - props.image: ", props.image);

  return (
    <div className="group flex flex-col hover:shadow-xl">
      <Link href={`/products/general/${props.id}`} className="h-full">
        <div className="relative h-full px-2 pt-2 rounded shadow flex flex-col items-center justify-center gap-2">
          {/*   <button onClick={window.scrollTo(0, 0)}> */}
          <Image
            //https://stackoverflow.com/questions/76758190/nextjs-how-to-avoid-image-warnings
            //add w-auto to className
            className="object-cover mb-5 w-auto"
            src={props.image}
            width={200}
            height={200}
            alt="image"
          />
          {/*  </button> */}
          <p className="text-center">{props.name}</p>
          <div className="flex gap-2">
            <div className="text-blue-500 font-semibold">
              ${props.new_price}
            </div>
            <div className="line-through text-gray-500">{props.old_price}</div>
          </div>
        </div>
      </Link>
      <button
        className="py-3 transition-all duration-300 opacity-100 md:opacity-0 group-hover:opacity-100 bg-red-500 text-white"
        onClick={() => {
          dispatch({
            type: "addToCart",
            identifier: props.id,
            unitPrice: Number(props.new_price),
          });
        }}
      >
        Añadir al carro
      </button>
    </div>
  );
}
