import Grid from "components/grid";
import Footer from "components/layout/footer";
import ProductGridItems from "components/layout/product-grid-items";
import FilterItemDropdown from "components/layout/search/filter/dropdown";
import { defaultSort, sorting } from "lib/constants";
import { getProducts } from "lib/shopify";

export const metadata = {
  title: "Sneakers",
  description: "Toutes les sneakers disponibles à la vente.",
};

export default async function SneakersPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse });

  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-8xl px-4 py-10 lg:px-8">
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-ink sm:text-5xl">
            Toutes nos <span className="text-brand">sneakers</span>
          </h1>
          <p className="mt-3 text-neutral-600">
            {products.length} paire{products.length > 1 ? "s" : ""}{" "}
            disponible{products.length > 1 ? "s" : ""}.
          </p>

          <div className="mt-8 w-36">
            <FilterItemDropdown list={sorting} />
          </div>

          {products.length > 0 ? (
            <Grid className="mt-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              <ProductGridItems products={products} />
            </Grid>
          ) : (
            <p className="mt-10 text-neutral-600">
              Aucune sneaker disponible pour le moment.
            </p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
