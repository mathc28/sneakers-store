import Price from "components/price";
import { Product } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  const isSoldOut = !product.availableForSale;

  return (
    <Link
      href={`/product/${product.handle}`}
      prefetch={true}
      className="group block"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
        {product.featuredImage?.url ? (
          <Image
            src={product.featuredImage.url}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition duration-300 ease-in-out group-hover:scale-105"
          />
        ) : null}

        {isSoldOut ? (
          <span className="absolute right-3 top-3 rounded-full bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-wide text-paper">
            Épuisé
          </span>
        ) : null}
      </div>

      <div className="mt-3">
        <h3 className="line-clamp-1 text-sm font-medium text-ink">
          {product.title}
        </h3>
        <Price
          className="mt-1 text-sm font-bold text-brand-dark"
          amount={product.priceRange.maxVariantPrice.amount}
          currencyCode={product.priceRange.maxVariantPrice.currencyCode}
        />
      </div>
    </Link>
  );
}
