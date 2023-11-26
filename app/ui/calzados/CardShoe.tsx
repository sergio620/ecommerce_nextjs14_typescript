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
          <div>
            <del className="mr-2 text-red-500">{props.prevPrice}</del>
            {props.newPrice}
          </div>
          <BsBagHeartFill />
        </section>
      </div>
    </section>
  );
}
