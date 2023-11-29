"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useShoeContext } from "../calzados/context/ShoeContext";

export default function DisplayShoe({
  data,
  idofProduct,
}: {
  data: Record<string, any>;
  idofProduct: string;
}) {
  const { dispatch, state } = useShoeContext();
  console.log(state.cart);

  return (
    <div className="flex">
      <div className="flex w-[65%] h-screen p-5">
        <div className="relative w-full h-full">
          <Image
            src={data.img}
            alt="Shoe"
            fill
            className="absolute object-contain"
          />
        </div>
      </div>
      <div className="p-5 grow flex justify-center">
        <div className="p-5 rounded border border-gray-400">
          <p className="py-3 text-[24px] text">{data.title}</p>
          <p className="py-3 line-through">{data.prevPrice}</p>
          <p className="py-3 text-[26px] font-bold">${data.newPrice}</p>
          <div className="py-3 flex">
            <FaStar className="text-yellow-600 text-[24px]" />
            <FaStar className="text-yellow-600 text-[24px]" />
            <FaStar className="text-yellow-600 text-[24px]" />
            <FaStar className="text-yellow-600 text-[24px]" />
            <FaStar className="text-[24px]" />
          </div>
          <p className="py-3 total-reviews">{data.reviews}</p>
          <p className="my-3 py-3 border-y border-gray-500">
            Lorem ipsum dolor sit amet. Ea velit eligendi non reiciendis magnam
            qui aliquam quia id quisquam earum est quibusdam dicta aut,dm
          </p>
          <p>
            <span className="text-gray-800 font-bold">Compañia: </span>
            {data.company}
          </p>
          <p>
            <span className="text-gray-800 font-bold">Color: </span>
            {data.color}
          </p>
          <p>
            <span className="text-gray-800 font-bold">Categoria: </span>
            {data.category}
          </p>
          <button
            className="mt-10 w-1/2 bg-red-500 rounded text-white p-3"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              dispatch({
                type: "addToCart",
                identifier: idofProduct,
                unitPrice: data.newPrice,
              })
            }
          >
            Añadir al carro
          </button>
        </div>
      </div>
    </div>
  );
}
