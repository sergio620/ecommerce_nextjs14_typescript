"use client";
import logo from "@/public/logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Footer() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-[50px] py-5 justify-between items-center border-t bprder-gray-400">
      <div
        className={`${
          pathname === "/login" ? "hidden " : ""
        } flex gap-[20px] items-center`}
      >
        <Image src={logo} alt="logo" width={100} height={100} />
        <p className="text-xl sm:text-3xl md:text-3xl lg:text-4xl text-gray-600 font-semibold">
          ACCESORIOS
        </p>
      </div>
      <ul
        className={`${
          pathname === "/login" ? "hidden " : ""
        } flex  flex-col items-center md:flex-row md:gap-[50px]`}
      >
        <li className="py-3 text-gray-600 text-sm">Company</li>
        <li className="py-3 text-gray-600 text-sm">Productos</li>
        <li className="py-3 text-gray-600 text-sm">Oficinas</li>
        <li className="py-3 text-gray-600 text-sm">Acerca de</li>
        <li className="py-3 text-gray-600 text-sm">Contacto</li>
      </ul>
      <div
        className={`${pathname === "/login" ? "hidden " : ""}flex gap-[50px]`}
      >
        <div className="w-[40px] aspect-square rounded border-2 border-gray-200 p-2">
          <AiOutlineInstagram className="h-full w-full text-gray-900 " />
        </div>
        <div className="w-[40px] aspect-square rounded border-2 border-gray-200 p-2">
          <AiFillFacebook className="h-full w-full text-gray-900 " />
        </div>
        <div className="w-[40px] aspect-square rounded border-2 border-gray-200 p-2">
          <BsWhatsapp className="h-full w-full text-gray-900 " />
        </div>
      </div>
      <hr className="bg-gray-500 w-[80%] mx-auto h-[3px]" />
      <p className="text-center">
        Copyright @ 2023 - Todos los derechos reservados
      </p>
    </div>
  );
}
