import { title } from "process";
import React from "react";

export default function Input({
  title,
  name,
  value,
}: {
  title: string;
  name: string;
  value: string;
}) {
  return (
    <div className="flex p-3 gap-5">
      <input type="checkbox" name={name} value={value} />
      <div>{title}</div>
    </div>
  );
}
