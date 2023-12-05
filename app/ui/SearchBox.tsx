"use client";
import React from "react";
import { useShoeContext } from "./calzados/context/ShoeContext";
import { FaSearch } from "react-icons/fa";
import { disconnect } from "process";

function assertIsDefined(val: any): asserts val is string {
  if (typeof val !== "string") {
    throw new Error("e.target.value is null or undefined in onKeyDown");
  }
}
export default function SearchBox() {
  const { dispatch, state } = useShoeContext();
  return (
    <div className="rounded md:flex h-[60px] mr-auto p-[10px] hidden">
      <input
        className="pl-5 grow h-[40px] h-full py-[9px] bg-[#F7F6F6]"
        type="text"
        placeholder="Buscar producto"
        value={state.inputSearchBox}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({
            type: "afterEveryKeyPressInSearchBox",
            setInputSearchBox: e.target.value,
          });
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          let val = e.currentTarget.value;
          assertIsDefined(val);
          dispatch({
            type: "afterPressEnter",
            keyEnterPressed: e.key,
          });
        }}
      />
      <button
        className="border-gray200 border w-[45px]"
        onClick={() => dispatch({ type: "afterPressEnter" })}
      >
        <FaSearch className="text-gray-600 h-5 w-full" />
      </button>
    </div>
  );
}
