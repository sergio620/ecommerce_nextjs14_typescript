"use client";
import Link from "next/link";
import Image from "next/image";
import { BsBagHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useShoeContext } from "./context/ShoeContext";

function assertHasId(val: any): asserts val is string {
  if (val === undefined || val === null) {
    throw new Error("e.currentTarget.id is null or undefined");
  }
}

export default function CardShoe(props: Record<string, any>) {
  const { dispatch } = useShoeContext();
  return (
    <div className="border border-gray-200 group pt-5 flex flex-col justify-center items-center rounded hover:shadow-xl">
      <Link
        href={`/products/calzados/${props.id}`}
        className="flex flex-col h-full w-full items-center"
      >
        <div className="flex justify-center items-center h-full">
          <Image
            src={props.img}
            alt="Shoe"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>

        <div className="mt-auto">
          <p className="text-center">{props.title}</p>
          <div className="py-3 flex">
            <FaStar className="text-yellow-600 text-[24px]" />
            <FaStar className="text-yellow-600 text-[24px]" />
            <FaStar className="text-yellow-600 text-[24px]" />
            <FaStar className="text-yellow-600 text-[24px]" />
            <FaStar className="text-[24px]" />
            <p className="">{props.reviews}</p>
          </div>
          <div className="flex justify-center gap-2">
            {/* How to convert a string to a number in JavaScript using the unary plus operator (+) */}
            {/* https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/ */}
            <p className="text-blue-500 ">{props.newPrice}</p>
            <p className="line-through text-gray-500">
              {props.prevPrice.match(/[^$,]+/g)[0]}
            </p>
            <BsBagHeartFill />
          </div>
        </div>
      </Link>
      <button
        id={props.id}
        className="w-full mt-auto py-3 transition-all duration-300 opacity-0 group-hover:opacity-100 bg-red-500 text-white"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          let id = e.currentTarget.getAttribute("id");
          assertHasId(id);
          dispatch({
            type: "addToCart",
            identifier: id,
            unitPrice: props.newPrice,
          });
        }}
      >
        Añadir al carro
      </button>
    </div>
  );
}
