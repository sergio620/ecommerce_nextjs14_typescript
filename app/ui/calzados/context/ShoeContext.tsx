"use client";
import { createContext, useContext, useReducer } from "react";
import { State, Action, valueShoeContext } from "@/app/lib/definitions";

//https://www.youtube.com/watch?v=I7dwJxGuGYQ
//https://www.youtube.com/watch?v=Wta5DQv_EfA
//https://www.youtube.com/watch?v=rgp_iCVS8ys
//https://www.youtube.com/watch?v=6e3PHoN7jj8
const ShoeContext = createContext<valueShoeContext | null>(null);
function reducer(state: State, action: Action): State {
  const {
    type,
    id,
    value,
    payload,
    setInputSearchBox,
    keyEnterPressed,
    identifier,
    firstFetchShoes,
    unitPrice,
  } = action;

  switch (type) {
    case "clickedInput":
      if (id) {
        if (value) {
          return {
            ...state,
            selectedFilter: { ...state.selectedFilter, [id]: value },
          };
        } else {
          throw new Error("value is undefined");
        }
      } else {
        throw new Error(
          `Para actualizar el filtro falta el atributo "name" en type clickedInput `
        );
      }
    case "afterFetchData":
      if (payload) {
        return { ...state, data: payload };
      } else {
        throw new Error(
          `No se obtuvieron datos en el fetch en afterFetchData type"`
        );
      }
    case "afterEveryKeyPressInSearchBox":
      //si solo dejamos en la condicion "setInputSearchBox", no estariamos analizando el caso en que "setInputSearchBox" sea string vacio "" ya que ese valor es falso. Y en consecuencia no vas a poder borrar el ultimo caracter en la caja de busqueda
      if (setInputSearchBox || setInputSearchBox === "") {
        return { ...state, inputSearchBox: setInputSearchBox };
      } else {
        throw new Error(
          "setInputSearchBox || setInputSearchBox ===`` es falso"
        );
      }
    case "afterPressEnter":
      if (keyEnterPressed) {
        if (keyEnterPressed.toString() === "Enter") {
          return { ...state, switchKeydown: !state.switchKeydown };
        } else {
          return state;
        }
      } else {
        throw new Error("keyEnterPressed is undefined");
      }

    case "addToCart":
      if (identifier) {
        if (unitPrice) {
          return {
            ...state,
            numberItemsInCart: state.numberItemsInCart + 1,
            subtotalGeneral: state.subtotalGeneral + unitPrice,
            subtotalItem: {
              ...state.subtotalItem,
              [identifier]: isNaN(state.cart[identifier])
                ? unitPrice
                : state.subtotalItem[identifier] + unitPrice,
            },
            cart: {
              ...state.cart,
              //https://stackoverflow.com/questions/2652319/how-do-you-check-that-a-number-is-nan-in-javascript
              [identifier]: isNaN(state.cart[identifier]) //state.cart.identifier  https://javascript.plainenglish.io/javascript-dot-notation-vs-bracket-notation-which-to-use-when-e24117e44d71#527c
                ? 1 //1 porque al no existir el objeto en su carro significa que ahora el usuario esta añadiendolo 1 unidad de esta al carro
                : state.cart[identifier] + 1, //sumamos 1 si en caso el valor no es NaN ya que el usuario esta añadiendo 1 item mas al carro
            },
          };
        } else {
          throw new Error("unitPrice is undefined in addToCart type");
        }
      } else {
        throw new Error("identifier is undefined in addToCart type");
      }
    case "deleteFromCart":
      if (identifier) {
        if (unitPrice) {
          return {
            ...state,
            numberItemsInCart: state.numberItemsInCart - 1,
            subtotalGeneral: state.subtotalGeneral - unitPrice,
            subtotalItem: {
              ...state.subtotalItem,
              [identifier]: state.subtotalItem[identifier] - unitPrice,
            },
            cart: {
              ...state.cart,
              [identifier]: state.cart[identifier] - 1,
            },
          };
        }
      } else {
        throw new Error("identifier is undefined in deleteFromCart type");
      }
    case "setIsOpen":
      return { ...state, isOpenMenu: !state.isOpenMenu };
    //para almacenar todos los productos obtenidos fel primer fetch a la base de datos, esto con el objetivo
    // de luego realizar un filtrado al entrar en la pagina cart.
    case "firstFetchShoePage":
      if (firstFetchShoes) {
        return { ...state, firstFetchShoePage: firstFetchShoes };
      }
    case "firstFetchHomePage":
      if (payload) {
        return { ...state, firstFetchHomePage: payload };
      } else {
        throw new Error(`No se obtuvieron datos en el fetch"`);
      }
    case "sideHiddenFilter":
      return { ...state, isOpenSideFilter: !state.isOpenSideFilter };
    case "clearFilter":
      return {
        ...state,
        selectedFilter: {
          category: "all",
          price: "all",
          color: "all",
          company: "all",
        },
        inputSearchBox: "",
      };

    default:
      return state;
  }
}

const initialState: State = {
  switchKeydown: false,
  inputSearchBox: "",
  selectedFilter: {
    category: "all",
    price: "all",
    color: "all",
    company: "all",
  },
  data: [],
  cart: {},
  firstFetchShoePage: [],
  numberItemsInCart: 0,
  subtotalItem: {},
  subtotalGeneral: 0,
  firstFetchHomePage: [],
  isOpenMenu: false,
  isOpenSideFilter: false,
};

export default function ShoeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
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
