"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png";
import { Poppins } from "next/font/google";
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useShoeContext } from "./calzados/context/ShoeContext";
import HiddenBar from "./HiddenBar";
import { LinkItem } from "../lib/definitions";
import SearchBox from "./SearchBox";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
export default function Navbar() {
  const { dispatch, state } = useShoeContext();
  const links: LinkItem[] = [
    { href: "/", child: "Home" },
    {
      href: "/products/calzados",
      child: "Calzados",
    },
    {
      href: "/login",
      child: <FaUser className="flex text-gray-600 h-5 w-10" />,
    },
    {
      href: "/cart",
      child: <AiOutlineShoppingCart className="flex text-gray-600 h-8 w-10" />,
    },
  ];

  return (
    <div className="w-full">
      <div
        className={`${poppins.className} md:order-1 z-40 min-w-max mb-[20px] bg-white sticky top-0 left-0 flex shadow-xl justify-between items-center h-20 px-5`}
      >
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>
        {/* Renderiza la barra de busqueda solo si esta en la pagina /calzados */}
        {usePathname() === "/products/calzados" && <SearchBox />}
        {/* -------------------------------------------------------------------- */}
        <nav className="hidden md:flex items-center h-full ml-auto">
          <ul className="h-full flex items-center ">
            {links.map((link, index) => (
              <button
                key={index}
                className={`flex items-center md:px-5 hover:bg-gray-200 h-11 `}
              >
                <Link
                  href={link.href}
                  className={`${link.href === "/cart" ? "relative" : " "}`}
                >
                  {link.child}
                  {link.href === "/cart" && (
                    <div className="hidden md:block absolute h-[22px] w-[22px] bg-red-500 rounded-full -top-2 -right-2 text-white text-center">
                      {state.numberItemsInCart}
                    </div>
                  )}
                </Link>
              </button>
            ))}
          </ul>
        </nav>
        <button
          onClick={() => {
            dispatch({ type: "setIsOpen" });
          }}
        >
          <FaBars className="md:hidden h-5 w-10" />
        </button>
      </div>
      <HiddenBar links={links} />
    </div>
  );
}
