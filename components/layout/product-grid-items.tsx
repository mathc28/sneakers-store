import ProductCard from "components/product/product-card";
import { Product } from "lib/shopify/types";

export default function ProductGridItems({
  products,
}: {
  products: Product[];
}) {
  return (
    <>
      {products.map((product) => (
        <li key={product.handle} className="animate-fadeIn">
          <ProductCard product={product} />
        </li>
      ))}
    </>
  );
}
