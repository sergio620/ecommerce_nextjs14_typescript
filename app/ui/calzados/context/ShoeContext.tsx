"use client";
import { createContext, useContext, useReducer } from "react";
import { State, Action, valueShoeContext } from "@/app/lib/definitions";

const ShoeContext = createContext<valueShoeContext | null>(null);

function reducer(state: State, action: Action) {
  const { type, name, value, payload } = action;
  switch (type) {
    case "updateFilter":
      if (name) {
        return { ...state, [name]: value };
      } else {
        throw new Error(`Para actualizar el filtro falta el atributo "name"`);
      }
    case "updateData":
      if (payload) {
        return { ...state, data: payload };
      } else {
        throw new Error(`No se obtuvieron datos en el fetch"`);
      }
    default:
      return state;
  }
}

const initialvalue = {
  category: "all",
  price: "all",
  color: "all",
  company: "all",
  data: [],
};

export default function ShoeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialvalue);
  return (
    <ShoeContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoeContext.Provider>
  );
}

export function useShoeContext() {
  const context = useContext(ShoeContext);
  if (!context) {
    throw new Error(
      "useShoeContext must be used within a ShoeContext.Provider"
    );
  }
  return context;
}
