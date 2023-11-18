import logo from "@/public/Assets/logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="flex flex-col gap-[50px] py-5 justify-between items-center">
      <div className="flex gap-[20px]">
        <Image src={logo} alt="logo" width={100} height={100} />
        <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 font-semibold">
          ACCESORIOS
        </p>
      </div>
      <ul className="flex gap-[50px]">
        <li>Company</li>
        <li>Productos</li>
        <li>Oficinas</li>
        <li>Acerca de</li>
        <li>Contacto</li>
      </ul>
      <div className="flex gap-[50px]">
        <div className="aspect-square w-14 rounded border-2 border-gray-200 p-2">
          <AiOutlineInstagram className="h-full w-full text-gray-900 " />
        </div>
        <div className="aspect-square w-14 rounded border-2 border-gray-200 p-2">
          <AiFillFacebook className="h-full w-full text-gray-900 " />
        </div>
        <div className="aspect-square w-14 rounded border-2 border-gray-200 p-2">
          <BsWhatsapp className="h-full w-full text-gray-900 " />
        </div>
      </div>
      <hr className="bg-gray-500 w-[80%] mx-auto h-[3px]" />
      <p>Copyright @ 2023 - Todos los derechos reservados</p>
    </div>
  );
}
