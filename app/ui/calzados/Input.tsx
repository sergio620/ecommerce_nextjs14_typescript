"use client";
import { ChangeEvent } from "react";
import { useShoeContext } from "./context/ShoeContext";
import { InputSideProps, Name, Value } from "@/app/lib/definitions";

//asegurar que el elemento input tiene la propiedad "e.currentTarget.name" y que esta es igual a los valores contenidos del type "Name"
function assertNameIsDefined(name: any): asserts name is Name {
  if (name === undefined || name === null) {
    throw new Error("e.currentTarget.name is undefined or null");
  }
}
//asegurar que el elemento input tiene la propiedad "e.currentTarget.value" y que esta es igual a los valores contenidos del type "Value"
function assertValueIsDefined(value: any): asserts value is Value {
  if (value === undefined || value === null) {
    throw new Error("e.currentTarget.value is undefined or null");
  }
}

export default function Input({ inputTag, name, value }: InputSideProps) {
  const { dispatch } = useShoeContext();
  return (
    <div className="flex p-3 gap-5">
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          let name = e.currentTarget.name;
          let value = e.currentTarget.value;
          assertNameIsDefined(name);
          assertValueIsDefined(value);
          dispatch({
            type: "clickedInput",
            name: name,
            value: value,
          });
        }}
        type="radio"
        name={name}
        value={value}
      />
      <div>{inputTag}</div>
    </div>
  );
}
