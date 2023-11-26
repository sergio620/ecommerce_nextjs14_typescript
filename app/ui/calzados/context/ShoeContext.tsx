"use client";
import { createContext, useContext, useReducer } from "react";
import {
  State,
  Action,
  valueShoeContext,
  SelectedFilter,
} from "@/app/lib/definitions";
//https://www.youtube.com/watch?v=I7dwJxGuGYQ
//https://www.youtube.com/watch?v=Wta5DQv_EfA
//https://www.youtube.com/watch?v=rgp_iCVS8ys
//https://www.youtube.com/watch?v=6e3PHoN7jj8
const ShoeContext = createContext<valueShoeContext | null>(null);

function reducer(state: State, action: Action): State {
  const { type, name, value, payload } = action;
  switch (type) {
    case "clickedInput":
      if (name) {
        return {
          ...state,
          selectedFilter: { ...state.selectedFilter, [name]: value },
        };
      } else {
        throw new Error(`Para actualizar el filtro falta el atributo "name"`);
      }
    case "afterFetchData":
      if (payload) {
        return { ...state, data: payload };
      } else {
        throw new Error(`No se obtuvieron datos en el fetch"`);
      }
    default:
      return state;
  }
}

const initialvalue: State = {
  selectedFilter: {
    category: "all",
    price: "all",
    color: "all",
    company: "all",
  },
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
