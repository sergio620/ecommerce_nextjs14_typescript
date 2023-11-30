"use client";
import { useShoeContext } from "@/app/ui/calzados/context/ShoeContext";
import GeneralItemsCart from "@/app/ui/cart/GeneralItemsCart";
import ShoeItems from "@/app/ui/cart/ShoeItemsCart";
export default function Cart() {
  const { state } = useShoeContext();
  const delivery = 0;
  const descuento = 0;

  return (
    <div className="px-9">
      <div className="text-5xl text-gray-600 py-6 font-semibold">
        Carro de compra
      </div>
      {/*  React does not allow you to render objects. https://stackoverflow.com/questions/72236090/type-name-string-is-not-assignable-to-type-reactnode */}
      <div className="flex flex-col items-center md:flex-row gap-12">
        <div className="flex flex-col grow">
          <ShoeItems />
          <GeneralItemsCart />
        </div>
        <div className="self-start order-first border border-gray-300 w-full rounded p-3 md:order-last md:w-[300px]">
          <div className="my-2 flex justify-between">
            <div>Subtotal</div>
            <div>S/ {state.subtotalGeneral}</div>
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
            <div className="font-bold">
              S/ {delivery + descuento + state.subtotalGeneral}
            </div>
          </div>
          <button className="w-full mt-auto bg-red-500 p-3 text-white">
            Verificar
          </button>
        </div>
      </div>
    </div>
  );
}
