import Image from "next/image";
import Link from "next/link";
import Footer from "components/layout/footer";

export const metadata = {
  title: "Rachat de sneakers",
  description:
    "Vendez-nous vos sneakers : envoyez vos photos, recevez une offre et soyez payé rapidement.",
};

const etapes = [
  {
    label: "Envoyez les photos",
    description:
      "Photographiez votre paire (boîte, semelle, étiquette) et envoyez-les nous via le formulaire de contact.",
  },
  {
    label: "Recevez une offre",
    description:
      "Notre équipe évalue l'état et l'authenticité de la paire et vous propose un prix sous 24-48h.",
  },
  {
    label: "Expédiez la paire",
    description:
      "Vous acceptez l'offre ? On vous envoie une étiquette prépayée pour l'expédition.",
  },
  {
    label: "Soyez payé",
    description:
      "Après vérification à réception, le paiement est effectué par virement bancaire ou PayPal.",
  },
];

const modeles = [
  { marque: "Jordan", details: "Jordan 1, 3, 4, 5, 6, 11" },
  { marque: "Nike", details: "Dunk, Air Max, collaborations limitées" },
  { marque: "Yeezy", details: "Boost 350, 500, collaborations" },
  { marque: "New Balance", details: "550, 990, collaborations" },
];

export default function RachatPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto grid max-w-8xl items-center gap-12 px-4 py-8 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-12">
          {/* Gauche : texte */}
          <div className="min-w-0">
            <h1 className="mt-6 break-words text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Vendez-nous
              <br />
              <span className="text-brand">vos sneakers</span>
            </h1>

            <p className="mt-6 max-w-md text-lg text-neutral-600">
              Vous cherchez à vendre vos sneakers en bon état ou neuves ? On
              vous fait une offre rapide et fiable, sans avoir à vous déplacer
              en boutique.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-brand px-7 py-3.5 font-semibold text-ink transition hover:bg-brand-dark"
              >
                Nous proposer ma paire
              </Link>
            </div>
          </div>

          {/* Droite : visuel */}
          <div className="relative w-full min-w-0 max-w-xl">
            <div className="aspect-square overflow-hidden rounded-3xl bg-[#E8E2D0]">
              <Image
                src="/hero.png"
                alt="Vente de sneakers"
                width={600}
                height={600}
                priority
                className="h-full w-full rounded-3xl object-cover drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 pb-16 lg:px-8">
          {/* Comment ça marche */}
          <h2 className="text-center text-2xl font-bold uppercase tracking-tight text-ink">
            Comment ça marche
          </h2>

          <div className="mt-6 divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            {etapes.map((etape, i) => (
              <div
                key={etape.label}
                className="flex items-start gap-4 px-6 py-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand font-bold text-ink">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink">{etape.label}</p>
                  <p className="mt-1 text-sm text-neutral-600">
                    {etape.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Modèles recherchés */}
          <h2 className="mt-14 text-center text-2xl font-bold uppercase tracking-tight text-ink">
            Modèles recherchés
          </h2>

          <div className="mt-6 divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
            {modeles.map((modele) => (
              <div
                key={modele.marque}
                className="flex items-center justify-between gap-4 px-6 py-5"
              >
                <p className="font-semibold text-ink">{modele.marque}</p>
                <p className="text-sm text-neutral-600">{modele.details}</p>
              </div>
            ))}
          </div>

          {/* Critères */}
          <div className="mt-14 text-center">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-ink">
              Conditions de rachat
            </h2>
            <p className="mt-4 text-neutral-600">
              Nous rachetons principalement des sneakers d&apos;occasion en
              très bon état : légères traces de pliures acceptées, pas de
              jaunissement, d&apos;égratignures ou de déchirures.
            </p>
            <p className="mt-4 text-neutral-600">
              Le paiement s&apos;effectue par virement bancaire ou PayPal,
              après réception et vérification de la paire.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-brand px-7 py-3.5 font-semibold text-ink transition hover:bg-brand-dark"
            >
              Nous proposer ma paire
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
