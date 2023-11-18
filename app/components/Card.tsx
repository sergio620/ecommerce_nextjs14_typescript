"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function card(props: Record<string, any>) {
  return (
    <div className="group flex flex-col hover:shadow-xl">
      <Link href={`/product/${props.id}`} className="h-full">
        <div className="h-full px-2 pt-2  rounded shadow flex flex-col items-center justify-center gap-2">
          {/*   <button onClick={window.scrollTo(0, 0)}> */}
          <Image
            className="object-cover mb-5"
            src={props.image}
            width={200}
            height={200}
            alt="image"
          />
          {/*  </button> */}
          <p className="text-center">{props.name}</p>
          <div className="flex gap-2">
            <div className="text-red-500 font-semibold">${props.new_price}</div>
            <div className="line-through text-gray-500">{props.old_price}</div>
          </div>
        </div>
      </Link>
      <button className="py-3 transition-all duration-300 opacity-0 group-hover:opacity-100 bg-red-500 text-white">
        Añadir al carro
      </button>
    </div>
  );
}
