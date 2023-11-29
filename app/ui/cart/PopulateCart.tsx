"use client";
import { useShoeContext } from "../calzados/context/ShoeContext";
import GeneralItemsCart from "./GeneralItemsCart";
import ShoeItems from "./ShoeItemsCart";

export default function PopulateCart(): JSX.Element {
  const { state } = useShoeContext();
  const delivery = 0;
  const descuento = 0;

  return (
    <div className="px-9">
      <div className="text-5xl text-gray-600 py-6 font-semibold">
        Carro de compra
      </div>
      {/*  React does not allow you to render objects. https://stackoverflow.com/questions/72236090/type-name-string-is-not-assignable-to-type-reactnode */}
      <div className="flex gap-12">
        <div className="flex flex-col grow">
          <ShoeItems />
          <GeneralItemsCart />
        </div>
        <div className="w-[300px]">
          <div className="my-2 flex justify-between">
            <div>Subtotal</div>
            <div>{state.subtotalGeneral}</div>
          </div>
          <div className="my-2 flex justify-between">
            <div>Delivery</div>
            <div>S/ {delivery}</div>
          </div>
          <div className="my-2 flex justify-between">
            <div>Descuento</div>
            <div>S/ {descuento}</div>
          </div>
          <div className="my-2 flex justify-between">
            <div>Total:</div>
            <div>S/ {delivery + descuento}</div>
          </div>
          <button className="w-full mt-auto bg-red-500 p-3 text-white">
            Verificar
          </button>
        </div>
      </div>
    </div>
  );
}
