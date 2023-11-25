import { fetchSingleProduct } from "@/app/lib/data";
import Image from "next/image";
import { BsBagHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

export default async function Product({
  params,
}: {
  params: { productID: string };
}) {
  const response = await fetchSingleProduct(params.productID);

  return (
    <div className="flex">
      <div className="flex w-[65%] h-screen">
        <div className="relative w-full h-full">
          <Image
            src={response.img}
            alt="Shoe"
            fill
            className="absolute object-contain"
          />
        </div>
      </div>
      <div className="p-5 grow flex justify-center">
        <div className="p-5 rounded border border-gray-400">
          <p className="py-3 text-[24px] text">{response.title}</p>
          <p className="py-3 line-through">{response.prevPrice}</p>
          <p className="py-3 text-[26px] font-bold">${response.newPrice}</p>
          <div className="py-3 flex">
            <FaStar className="text-yellow-600 text-[24px]" />
            <FaStar className="text-yellow-600 text-[24px]" />
            <FaStar className="text-yellow-600 text-[24px]" />
            <FaStar className="text-yellow-600 text-[24px]" />
            <FaStar className="text-[24px]" />
          </div>
          <p className="py-3 total-reviews">{response.reviews}</p>
          <p className="my-3 py-3 border-y border-gray-500">
            Lorem ipsum dolor sit amet. Ea velit eligendi non reiciendis magnam
            qui aliquam quia id quisquam earum est quibusdam dicta aut,dm
          </p>
          <p>
            <span className="text-gray-800 font-bold">Compañia: </span>
            {response.company}
          </p>
          <p>
            <span className="text-gray-800 font-bold">Color: </span>
            {response.color}
          </p>
          <p>
            <span className="text-gray-800 font-bold">Categoria: </span>
            {response.category}
          </p>
          <button className="mt-10 w-1/2 bg-red-500 rounded text-white p-3">
            Añadir al carro
          </button>
        </div>
      </div>
    </div>
  );
}
