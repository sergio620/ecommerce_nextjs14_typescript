import Image from "next/image";
import Link from "next/link";
import woman from "@/public/woman.png";

export default function Hero() {
  return (
    <div className="bg-[#CDF5FD] z-10 relative h-[590px] flex flex-col justify-center">
      <Image
        className="object-cover pl-[200px] sm:pl-[500px] md:pl-[600px] lg:pl-[800px] xl:pl-[1000px] 2xl:pl-[1100px] z-20"
        fill
        src={woman}
        alt="woman"
      />
      <div className="pl-4 flex flex-col z-30 pr-36 md:pr-64 md:ml-[120px]">
        <p className="text-sm text-gray-900">
          Colección Primavera / Verano 2024
        </p>
        <p className="my-5 text-xl sm:text-3xl md:text-5xl text-gray-800 2xl:pr-5">
          Obtenga hasta un 30% de descuento en recién llegados
        </p>
        <div className="text-xl text-gray-800">
          <button className="hover:shadow-xl p-2 rounded-sm bg-red-500 text-white">
            <Link href="/">Compra ahora</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
