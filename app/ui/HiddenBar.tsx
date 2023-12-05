"use client";
import React from "react";
import { useShoeContext } from "./calzados/context/ShoeContext";
import { FaTimes } from "react-icons/fa";
import { LinkItem } from "../lib/definitions";
import Link from "next/link";
export default function HiddenBar({ links }: { links: LinkItem[] }) {
  const { state, dispatch } = useShoeContext();
  return (
    <div
      className={`transition-all duration-500 w-0 md:hidden overflow-x-hidden fixed z-50 bg-slate-50/90 top-0 right-0 ${
        state.isOpenMenu ? "w-full " : "w-0 "
      }  flex flex-col items-center`}
    >
      <button
        className="self-end h-11"
        onClick={() => {
          dispatch({ type: "setIsOpen" });
        }}
      >
        <FaTimes className="block h-5 w-10 " />
      </button>

      <nav className="w-full ">
        <ul className="flex flex-col items-center w-full ">
          {links.map((link, index) => (
            <button
              key={index}
              className={`flex flex-col justify-center items-center border-b-2 border-gray-500 w-full  hover:bg-gray-200 h-11`}
              onClick={() => dispatch({ type: "setIsOpen" })}
            >
              <Link href={link.href}>{link.child}</Link>
            </button>
          ))}
        </ul>
      </nav>
    </div>
  );
}
