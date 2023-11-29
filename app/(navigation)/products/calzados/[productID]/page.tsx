import { fetchSingleProduct } from "@/app/lib/data";
import DisplayShoe from "@/app/ui/productsDisplay/DisplayShoe";

//https://nextjs.org/docs/app/api-reference/file-conventions/page
export default async function Product({
  params,
}: {
  params: { productID: string };
}) {
  const data = await fetchSingleProduct(params.productID);

  return (
    /* Cree el componente "DisplayShoe" para poder hacer esta funcion asincrona y hacer el fetch ya que en "DisplayShoe" por culpa del dispatch debe ser "use client" componente cliente */
    <DisplayShoe data={data} idofProduct={params.productID} />
  );
}
