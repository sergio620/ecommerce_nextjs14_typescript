"use client";
import Link from "next/link";
import Image from "next/image";
import { BsBagHeartFill } from "react-icons/bs";

export default function CardShoe(props: Record<string, any>) {
  return (
    <section className="flex flex-col justify-center items-center">
      <Link href={`/calzados/${props.id}`}>
        <Image
          src={props.img}
          alt="Shoe"
          width={200}
          height={200}
          className="object-contain"
        />
      </Link>
      <div className="mt-auto">
        <p className="card-title">{props.title}</p>
        <p className="total-reviews">{props.reviews}</p>
        <section className="flex justify-between">
          {/* How to convert a string to a number in JavaScript using the unary plus operator (+) */}
          {/* https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/ */}
          <div className="text-blue-500 ">{+props.newPrice + 2}</div>
          <div className="line-through text-gray-500">
            {props.prevPrice.match(/[^$,]+/g)[0]}
          </div>
          <BsBagHeartFill />
        </section>
      </div>
    </section>
  );
}
