"use client";
import { ChangeEvent } from "react";
import { useShoeContext } from "./context/ShoeContext";
import {
  Category,
  Color,
  Id,
  InputSideProps,
  Price,
} from "@/app/lib/definitions";

//asegurar que el elemento input tiene la propiedad "e.currentTarget.Id" y que esta es igual a los valores contenidos del type "Name"
function assertIdIsDefined(name: any): asserts name is Id {
  if (name === undefined || name === null) {
    throw new Error("e.currentTarget.Id is undefined or null");
  }
}
//asegurar que el elemento input tiene la propiedad "e.currentTarget.value" y que esta es igual a los valores contenidos del type "Value"
function assertValueIsDefined(
  val: any
): asserts val is Category | Price | Color {
  if (val === undefined || val === null) {
    throw new Error("e.currentTarget.value is undefined or null");
  }
}

export default function Input({ inputTag, name, value, id }: InputSideProps) {
  const { dispatch, state } = useShoeContext();
  return (
    <div className="flex p-3 gap-5">
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          let Id = e.currentTarget.id;
          let val = e.currentTarget.value;
          assertIdIsDefined(Id);
          assertValueIsDefined(val);
          dispatch({
            type: "clickedInput",
            id: Id,
            value: val,
          });
        }}
        type="radio"
        name={name}
        value={value}
        id={id}
        //https://stackoverflow.com/questions/73524522/trying-to-reset-a-group-of-radio-button-in-react-through-a-button
        checked={value === state.selectedFilter[id]}
      />
      <div>{inputTag}</div>
    </div>
  );
}
