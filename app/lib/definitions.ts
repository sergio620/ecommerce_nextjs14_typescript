import { Dispatch } from "react";
export type Params = {
  [key: string]: string;
};

//https://www.youtube.com/watch?v=6e3PHoN7jj8

export type Category = "all" | "sneakers" | "flats" | "sandals" | "heels";
export type Price = "all" | "50" | "100" | "150" | "200";
export type Color = "all" | "black" | "blue" | "red" | "green" | "white";
export type Company = "all" | "nike" | "adidas" | "puma" | "vans";
//keys in each document in database
export type keysInDataBase = "category" | "newPrice" | "color" | "company";
//when a user click in input o button the attribute "name" only can be this values
export type Name = "category" | "price" | "color" | "company";
//when a user click in input o button the attribute "value" only can be this values
export type Value = Category | Price | Color | Company;

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
//---select Filter has this form
export type SelectedFilter = {
  category: Category;
  price: Price;
  color: Color;
  company: Company;
};
//---------Types for Dispatch-------
export type State = {
  selectedFilter: SelectedFilter;
  data: Record<string, any>[];
};
export type Action = {
  type: "clickedInput" | "afterFetchData";
  name?: Name;
  value?: Value;
  payload?: Record<string, any>[];
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

export type InputProps = {
  inputTag: string;
  name: string;
  value: string;
};
