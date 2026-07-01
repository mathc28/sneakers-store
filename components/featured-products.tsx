import { ArrowRightIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import Price from "components/price";
import { getProducts } from "lib/shopify";
import { Product } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";

export default async function FeaturedProducts() {
  // récupère tes produits Shopify, les plus récents d'abord
  const products = await getProducts({ sortKey: "CREATED_AT", reverse: true });

  if (!products.length) return null;

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-extrabold uppercase tracking-tight text-ink sm:text-5xl">
              Les dernières <span className="text-brand">trouvailles</span>
            </h2>
            <p className="mt-3 text-lg text-neutral-600">
              Sélectionnées et authentifiées par nos experts cette semaine.
            </p>
          </div>
          <Link href="/sneakers" className="hidden flex-none items-center gap-2 font-semibold text-ink transition hover:text-brand sm:inline-flex">
            Voir tout
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
          {products.slice(0, 4).map((product: Product) => (
            <Link
              key={product.handle}
              href={`/product/${product.handle}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative bg-[#EAF6F0] p-4">
                {product.tags[0] ? (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                    {product.tags[0]}
                  </span>
                ) : null}
                <div className="aspect-square overflow-hidden rounded-xl">
                  {product.featuredImage ? (
                    <Image
                      src={product.featuredImage.url}
                      alt={product.featuredImage.altText || product.title}
                      width={400}
                      height={400}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : null}
                </div>
                <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-md transition group-hover:bg-brand">
                  <ShoppingBagIcon className="h-5 w-5" />
                </span>
              </div>

              <div className="flex flex-col gap-1 p-5">
                <span className="text-lg font-semibold text-ink">{product.title}</span>
                <Price
                  className="text-xl font-bold text-ink"
                  amount={product.priceRange.maxVariantPrice.amount}
                  currencyCode={product.priceRange.maxVariantPrice.currencyCode}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}