import Image from "next/image";

export default function Offers() {
  return (
    <div className="relative h-96 lg:h-[600px] z-10 bg-[#CDF5FD] pl-12 lg:pl-24 xl:pl-64 flex items-center">
      <div className="absolute z-30 flex flex-col justify-center items-start">
        <p className="text-xl sm:text-3xl md:text-7xl lg:text-8xl text-gray-800 font-semibold">
          Exclusivo <br /> Ofertas <br /> para ti
        </p>
        <p className="text-sm pr-[100px] sm:p-2">
          SÓLO EN LOS PRODUCTOS MÁS VENDIDOS
        </p>
        <button className="text-xl bg-red-500 text-white rounded-xl mr-3 my-3 p-3">
          Revisalo ahora
        </button>
      </div>
      <div className="absolute top-0 right-0 h-[100%] w-1/2">
        <Image
          className="absolute object-contain z-20"
          src="https://freepngimg.com/thumb/smartphone/21604-1-smartphone-transparent-background.png"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="mobile"
        />
      </div>
    </div>
  );
}
