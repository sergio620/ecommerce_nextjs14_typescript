"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/Assets/logo.png";
import { Poppins } from "next/font/google";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

interface links {
  href: string;
  child?: string | React.JSX.Element;
  breakpoint: string;
}

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
export default function Navbar() {
  const links: links[] = [
    { href: "/", child: "Tienda", breakpoint: "hidden md:flex" },
    { href: "/hombres", child: "Hombres", breakpoint: "hidden md:flex" },
    { href: "/mujeres", child: "Mujeres", breakpoint: "hidden md:flex" },
    {
      href: "/buscar",
      child: <FaSearch className="h-5 w-10" />,
      breakpoint: "flex",
    },
    {
      href: "/ingresar",
      child: <FaUser className="h-5 w-10" />,
      breakpoint: "flex",
    },
    {
      href: "/carrito",
      child: <AiOutlineShoppingCart className="h-5 w-10" />,
      breakpoint: "flex",
    },
  ];
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const content = (
    <div
      className={`transition-all duration-500 w-full md:w-1/2 fixed z-10 bg-slate-50/90 top-0 ${
        isOpen ? "" : "right-[-800px]"
      } right-0 flex flex-col items-center`}
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
        className={`${poppins.className} flex shadow justify-between items-center h-20 px-5`}
      >
        <div>
          <Image src={logo} alt="logo" width={100} height={100}></Image>
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
      {content}
    </>
  );
}
