"use client";
import { ChangeEvent } from "react";
import { useShoeContext } from "./context/ShoeContext";
import { InputProps } from "@/app/lib/definitions";

export default function Input({ inputTag, name, value }: InputProps) {
  const { dispatch } = useShoeContext();
  return (
    <div className="flex p-3 gap-5">
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          dispatch({
            type: "updateFilter",
            name: e.target.name,
            value: e.target.value,
          })
        }
        type="radio"
        name={name}
        value={value}
      />
      <div>{inputTag}</div>
    </div>
  );
}
