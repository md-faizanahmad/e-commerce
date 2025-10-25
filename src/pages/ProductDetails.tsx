import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../utils/api";

function ProductDetails() {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(Number(id)),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{product?.title}</h1>
      <img src={product?.image} alt={product?.title} className="w-64" />
      <p>{product?.description}</p>
      <p className="text-xl">${product?.price}</p>
    </div>
  );
}
export default ProductDetails;
