"use client";
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useShoeContext } from "../calzados/context/ShoeContext";

export default function ShoeItems() {
  const { state, dispatch } = useShoeContext();
  const data = state.firstFetchShoePage;
  const dataFiltered = data.filter((item) => {
    //https://www.freecodecamp.org/news/how-to-check-if-an-object-has-a-key-in-javascript/
    //comprobamos si el "_id" existe como key en el objeto "cart" del "state"
    if (item._id in state.cart) {
      //comprobamos si la cantidad de este en el carro es positiva
      if (state.cart[item._id] > 0) {
        return item; //returnamos este item de data al array
      }
    }
  });
  return (
    <>
      {dataFiltered.map((item2, index2) => {
        return (
          <div
            key={index2}
            className="flex justify-between gap-2 p-3 border border-gray-300 my-2 rounded shadow"
          >
            <div className="flex flex-col md:flex-row">
              <div className="flex justify-center">
                <Image
                  src={item2.img}
                  alt="shoe"
                  width={140}
                  height={140}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col p-3">
                <div className="font-bold">{item2.title}</div>
                <div>{item2.company}</div>
                <div className="flex">
                  <div className="flex gap-2">
                    <div className="py-3 flex">
                      <FaStar className="text-yellow-600 text-[15px]" />
                      <FaStar className="text-yellow-600 text-[15px]" />
                      <FaStar className="text-yellow-600 text-[15px]" />
                      <FaStar className="text-yellow-600 text-[15px]" />
                      <FaStar className="text-[15px]" />
                    </div>
                    <div className="py-3 text-sm">{item2.reviews}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between md:justify-center">
              <div className="flex gap-5 justify-between py-1">
                <div className=" text-sm font-semibold">Precio unitario:</div>
                <div className="mt-auto  whitespace-nowrap">
                  S/ {item2.newPrice}
                </div>
              </div>
              <div className="flex gap-5 justify-between py-1">
                <div className=" text-sm font-semibold">Cantidad:</div>
                <div className="mt-auto">{state.cart[item2._id]}</div>
              </div>
              <div className="flex gap-5 justify-between py-1">
                <div className=" text-sm font-semibold">
                  Precio Total <br />
                  del Producto:
                </div>
                <div className="mt-auto whitespace-nowrap">
                  S/ {state.subtotalItem[item2._id]}
                </div>
              </div>
            </div>
            <div className="">
              <IoMdClose
                className="w-[28px] h-[28px]  hover:bg-gray-300 cursor-pointer  text-gray-600"
                onClick={() => {
                  dispatch({
                    type: "deleteFromCart",
                    identifier: item2._id,
                    unitPrice: item2.newPrice,
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
