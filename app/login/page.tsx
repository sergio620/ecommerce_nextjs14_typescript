import React from "react";
import woman from "@/public/woman.png";
import Image from "next/image";
export default function Login() {
  return (
    <div className="bg-white md:flex">
      <div className="hidden md:block relative md:w-1/2  bg-orange-500">
        <Image
          src="https://i.pinimg.com/originals/0e/b4/c2/0eb4c25fb70ae3f291d9d5523fda1269.jpg"
          alt="background"
          fill
          className="object-cover z-10 absolute"
        />
        <Image
          src={woman}
          alt="woman"
          fill
          className="absolute z-20 object-contain hidden md:block"
        />
      </div>
      <div className="grow h-screen flex justify-center items-center">
        <div className="bg-white border border-gray-200 rounded-md shadow-md flex flex-col items-center p-5 gap-5">
          <div className="text-gray-600 font-bold p-5">INGRESAR</div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-gray-600 text-sm place-self-start">
              Usuario
            </div>
            <input type="text" className="border-b border-gray-600 p-5" />
            <div className="text-gray-600 text-sm place-self-start">
              Contraseña
            </div>
            <input type="password" className="border-b border-gray-600 p-5" />
            <div className="text-sky-600 text-xs place-self-end">
              Olvidaste tu contraseña?
            </div>
          </div>
          <div className="w-full">
            <button className="bg-[#2988FE] w-full rounded-md p-2 text-white font-bold">
              Ingresar
            </button>
          </div>
          <div className="text-gray-600 text-xs">
            Nuevo usuario? <span className="text-sky-600">Crea una cuenta</span>
          </div>
        </div>
      </div>
    </div>
  );
}
