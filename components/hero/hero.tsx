import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-8xl items-center gap-12 px-4 py-12 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:px-6 lg:py-16">
        {/* Gauche : texte */}
        <div className="relative z-10 order-last min-w-0 lg:order-none">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/15 px-4 py-1.5 text-sm font-semibold text-brand-dark">
            <ShieldCheckIcon className="h-4 w-4" />
            100% authentifié, garanti
          </span>

          <h1 className="mt-6 break-words text-4xl font-extrabold uppercase leading-[0.92] tracking-tight text-ink sm:text-7xl lg:text-7xl">
            L&apos;authenticité,
            <br />
            <span className="text-brand">sans compromis</span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-neutral-600">
            Chaque paire est inspectée et authentifiée par nos experts. Jordan,
            Dunk, Yeezy, New Balance — trouve ta prochaine pièce avec confiance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/sneakers"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-ink transition hover:bg-brand-dark"
            >
              Explorer les drops
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/a-propos"
              className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-7 py-3.5 font-semibold text-ink transition hover:border-neutral-400"
            >
              Comment ça marche
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((n) => (
                <span
                  key={n}
                  className="h-8 w-8 rounded-full border-2 border-paper bg-neutral-200"
                />
              ))}
            </div>
            <p className="text-sm text-neutral-600">
              <span className="font-bold text-ink">2 500+</span> passionnés nous
              font confiance
            </p>
          </div>
        </div>

        {/* Droite : visuel produit */}
        <div className="relative order-first mx-auto w-full min-w-0 max-w-lg lg:order-none lg:max-w-xl">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rotate-6 rounded-[2.5rem] bg-brand/25"
          />
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-[#E8E2D0]">
            <Image
              src="/hero.png"
              alt="Sneaker en vedette"
              width={700}
              height={700}
              priority
              className="h-full w-full scale-110 object-cover drop-shadow-2xl"
            />
          </div>

          <div className="absolute -bottom-4 -left-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-bottom-6 sm:-left-10 sm:px-5 sm:py-4">
            <ShieldCheckIcon className="h-9 w-9 flex-none text-brand" />
            <div>
              <p className="text-sm font-bold text-ink">Authenticité vérifiée</p>
              <p className="text-xs text-neutral-500">Par nos experts certifiés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
