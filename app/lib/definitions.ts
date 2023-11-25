import { Dispatch } from "react";

export type State = {
  category: string;
  price: string;
  color: string;
  company: string;
  data: Record<string, any>[];
};
//https://www.youtube.com/watch?v=6e3PHoN7jj8
export type Action = {
  type: "updateFilter" | "updateData";
  name?: string;
  value?: string;
  payload?: Record<string, any>[];
};

export type valueShoeContext = { state: State; dispatch: Dispatch<Action> };

export type InputProps = {
  inputTag: string;
  name: string;
  value: string;
};
