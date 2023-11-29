"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useShoeContext } from "../calzados/context/ShoeContext";

export default function GeneralItemsCart() {
  const { state, dispatch } = useShoeContext();
  const data = state.firstFetchHomePage;
  const dataFiltered = data.filter((item) => {
    //https://www.freecodecamp.org/news/how-to-check-if-an-object-has-a-key-in-javascript/
    //comprobamos si el "_id" existe como key en el objeto "cart" del "state"
    if (item.id in state.cart) {
      //comprobamos si la cantidad de este en el carro es positiva
      if (state.cart[item.id] > 0) {
        return item; //returnamos este item de data al array
      }
    }
  });
  return (
    <>
      {dataFiltered.map((item, index) => {
        return (
          <div
            key={index}
            className="flex justify-between p-3 border border-gray-300 my-2 rounded shadow"
          >
            <div className="flex justify-center">
              <Image
                src={item.thumbnail}
                alt="shoe"
                width={140}
                height={140}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col p-3">
              <div className="font-bold">{item.title}</div>
              <div>{item.brand}</div>
              <div className="flex">
                <div className="flex gap-2">
                  <div className="py-3 flex">
                    <FaStar className="text-yellow-600 text-[15px]" />
                    <FaStar className="text-yellow-600 text-[15px]" />
                    <FaStar className="text-yellow-600 text-[15px]" />
                    <FaStar className="text-yellow-600 text-[15px]" />
                    <FaStar className="text-[15px]" />
                  </div>
                  <div className="py-3 text-sm">{item.rating}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex gap-5 justify-between py-1">
                <div className=" text-sm font-semibold ">Precio unitario:</div>
                <div className="mt-auto whitespace-nowrap">S/ {item.price}</div>
              </div>
              <div className="flex gap-5 justify-between py-1">
                <div className=" text-sm font-semibold">Cantidad:</div>
                <div className="mt-auto">{state.cart[item.id]}</div>
              </div>
              <div className="flex gap-5 justify-between py-1">
                <div className=" text-sm font-semibold">
                  Precio Total <br />
                  del Producto:
                </div>
                <div className="mt-auto whitespace-nowrap">S/ {state.subtotalItem[item.id]}</div>
              </div>
            </div>
            <div className="">
              <IoMdClose
                className="w-[28px] h-[28px]  hover:bg-gray-300 cursor-pointer  text-gray-600"
                onClick={() => {
                  dispatch({
                    type: "deleteFromCart",
                    identifier: item.id,
                    unitPrice: item.price,
                  });
                }}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
