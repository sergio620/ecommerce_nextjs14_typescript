import { Dispatch } from "react";
//https://stackoverflow.com/questions/13315131/enforcing-the-type-of-the-indexed-members-of-a-typescript-object
// it does enforce the key types and the value to be string
export type Params = {
  [key: string]: string;
};

//https://www.youtube.com/watch?v=6e3PHoN7jj8

type Category = "all" | "sneakers" | "flats" | "sandals" | "heels";
type Price = "all" | "50" | "100" | "150" | "200";
type Color = "all" | "black" | "blue" | "red" | "green" | "white";
type Company = "all" | "nike" | "adidas" | "puma" | "vans";
//keys in each document in database
/* export type keysInDataBase = "category" | "newPrice" | "color" | "company"; */
//when a user click in input o button the attribute "name" only can be this values
export type Name = "category" | "price" | "color" | "company";
//when a user click in input o button the attribute "value" only can be this values
export type Value = Category | Price | Color | Company;
export interface LinkItem {
  href: string;
  child: string | React.JSX.Element;
  breakpoint: string;
}
//https://stackoverflow.com/questions/72170275/typescript-object-key-as-key-of-another-object
/* export type FilterForDatabase = Record<
  keysInDataBase,
  Category | Price | Color | Company
>; */
//Params before to send a filter to database
export type SearchParams = {
  category?: Category;
  price?: Price;
  color?: Color;
  company?: Company;
  title?: string;
};
//-------------type for array in Sidebar.tsx
export type ElementsSidebar = {
  sectionTag: string;
  inputElements: {
    inputTag: string;
    value: Category | Price | Color;
    name: "category" | "price" | "color";
  }[];
}[];
//---selected Filter has this form
export type SelectedFilter = {
  category: Category;
  price: Price;
  color: Color;
  company: Company;
};
//---------Types for Dispatch-------
export type State = {
  switchKeydown: boolean;
  search: string;
  selectedFilter: SelectedFilter;
  data: Record<string, any>[];
  cart: Record<string, number>;
  firstFetchShoePage: Record<string, any>[];
  numberItemsInCart: number;
  subtotalItem: Record<string, number>;
  subtotalGeneral: number;
  firstFetchHomePage: Record<string, any>[];
  isOpenMenu: boolean; //para detectar si el menu de navegacion ("hambuerguer icon") a sido abierto (clickado)
  isOpenSideFilter: boolean;
};
export type Action = {
  type:
    | "clickedInput"
    | "afterFetchData"
    | "afterPressEnter"
    | "afterEveryKeyPressInSearchBox"
    | "addToCart"
    | "firstFetchShoePage"
    | "firstFetchHomePage"
    | "deleteFromCart"
    | "setIsOpen"
    | "sideHiddenFilter";
  inputSearchBox?: string;
  name?: Name;
  value?: Value;
  keyEnterPressed?: string;
  payload?: Record<string, any>[];
  identifier?: string;
  firstFetchShoes?: Record<string, any>[];
  unitPrice?: number;
};
//----------Initial Value for inputs left Side bar------------------------
export type InitialValue = {
  category: Category;
  price: Price;
  color: Color;
  company: Company;
};
//-----------------------------------------------------------------------
export type valueShoeContext = { state: State; dispatch: Dispatch<Action> };

export type InputSideProps = {
  inputTag: string;
  name: "category" | "price" | "color";
  value: Category | Price | Color;
};
