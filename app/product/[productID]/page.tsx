export default function Product({ params }: { params: { productID: string } }) {
  return <div>Product {params.productID}</div>;
}
