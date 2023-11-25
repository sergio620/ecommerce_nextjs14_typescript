"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png";
import { Poppins } from "next/font/google";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

interface links {
  href: string;
  child: string | React.JSX.Element;
  breakpoint: string;
}

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
export default function Navbar() {
  const links: links[] = [
    { href: "/", child: "Home", breakpoint: "hidden md:flex" },
    { href: "/calzados", child: "Calzados", breakpoint: "hidden md:flex" },
    { href: "/hombres", child: "Hombres", breakpoint: "hidden md:flex" },
    { href: "/mujeres", child: "Mujeres", breakpoint: "hidden md:flex" },
    {
      href: "/login",
      child: <FaUser className="text-gray-600 h-5 w-10" />,
      breakpoint: "flex",
    },
    {
      href: "/carrito",
      child: <AiOutlineShoppingCart className="text-gray-600 h-8 w-10" />,
      breakpoint: "flex",
    },
  ];
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const hiddenBar = (
    <div
      className={`transition-all duration-500 w-full md:w-1/2 fixed z-50 bg-slate-50/90 top-0 ${
        isOpen ? "right-0" : "right-[-800px]"
      }  flex flex-col items-center`}
    >
      <button
        className="self-end h-11"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FaTimes className="block h-5 w-10 " />
      </button>

      <nav className="w-full ">
        <ul className="flex flex-col items-center w-full ">
          {links.map((link, index) => (
            <li
              key={index}
              className={`flex flex-col justify-center items-center border-b-2 border-gray-500 w-full  hover:bg-gray-200 h-11`}
            >
              <Link href={link.href}>{link.child}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      <div
        className={`${poppins.className} z-40 bg-white sticky w-full top-0 left-0  flex shadow-xl justify-between items-center h-20 px-5`}
      >
        <div>
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
        <div className="rounded flex h-[60px] grow p-[10px]">
          <input
            className="pl-5 grow h-[40px] h-full py-[9px] bg-[#F7F6F6]"
            type="text"
            placeholder="Buscar producto"
          />
          <button className="border-gray200 border w-[45px]">
            <FaSearch className="text-gray-600 h-5 w-full" />
          </button>
        </div>
        <nav className="flex items-center h-full ">
          <ul className="h-full flex items-center ">
            {links.map((link, index) => (
              <li
                key={index}
                className={`${link.breakpoint} items-center px-5 hover:bg-gray-200 h-11 border-r-2 border-gray-500`}
              >
                <Link href={link.href}>{link.child}</Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FaBars className="md:hidden h-5 w-10" />
          </button>
        </nav>
      </div>
      {hiddenBar}
    </>
  );
}
