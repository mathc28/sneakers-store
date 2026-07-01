import Image from "next/image";
import Footer from "components/layout/footer";

export const metadata = {
  title: "Nettoyage sneakers",
  description:
    "Service de nettoyage professionnel pour tes sneakers : lavage extérieur ou nettoyage complet.",
};

const tarifs = [
  {
    label: "Lavage extérieur",
    description: "Nettoyage de la tige et de la semelle.",
    price: "25€",
  },
  {
    label: "Nettoyage complet",
    description: "Extérieur, intérieur, lacets et semelle intercalaire.",
    price: "45€",
  },
];

export default function NettoyagePage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto grid max-w-8xl items-center gap-12 px-4 py-8 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-12">
          {/* Gauche : visuel */}
          <div className="relative w-full min-w-0 max-w-xl">
            <div className="aspect-square overflow-hidden rounded-3xl bg-[#E8E2D0]">
              <Image
                src="/cleaning.png"
                alt="Nettoyage de sneakers"
                width={600}
                height={600}
                priority
                className="h-full w-full rounded-3xl object-cover drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Droite : texte */}
          <div className="min-w-0">
            <h1 className="mt-6 break-words text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Nettoyage
              <br />
              <span className="text-brand">sneakers</span>
            </h1>

            <p className="mt-6 max-w-md text-lg text-neutral-600">
              Redonne vie à tes paires grâce à notre service de nettoyage
              professionnel. Lavage extérieur ou nettoyage complet, on
              s&apos;occupe de tout.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 pb-16 lg:px-8">
          <h2 className="text-center text-2xl font-bold uppercase tracking-tight text-ink">
            Tarifs
          </h2>

          <div className="mt-6 divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            {tarifs.map((tarif) => (
              <div
                key={tarif.label}
                className="flex items-center justify-between gap-4 px-6 py-5"
              >
                <div>
                  <p className="font-semibold text-ink">{tarif.label}</p>
                  <p className="mt-1 text-sm text-neutral-600">
                    {tarif.description}
                  </p>
                </div>
                <p className="shrink-0 text-xl font-bold text-brand">
                  {tarif.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
