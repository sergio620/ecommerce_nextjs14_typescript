import { fetchSingleProductDummy } from "@/app/lib/data";
import DisplayGeneral from "@/app/ui/productsDisplay/DisplayGeneral";

//https://nextjs.org/docs/app/api-reference/file-conventions/page
export default async function Product({
  params,
}: {
  params: { productID: string };
}) {
  const data = await fetchSingleProductDummy(params.productID);

  return (
    /* Cree el componente "DisplayGeneral" para poder hacer esta funcion asincrona y hacer el fetch ya que en "DisplayGeneral" por culpa del dispatch debe ser "use client" componente cliente */
    <DisplayGeneral data={data} idofProduct={params.productID} />
  );
}
