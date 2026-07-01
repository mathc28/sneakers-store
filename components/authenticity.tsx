import { CheckCircleIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const features = [
  "Inspection visuelle approfondie",
  "Vérification des détails techniques",
  "Carte d'authenticité incluse",
  "Remboursement sous 14 jours",
];

export default function Authenticity() {
  return (
    <section className="bg-[#EAF6F0]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid items-center gap-10 rounded-3xl bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-12">
          {/* Gauche */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/15 px-4 py-1.5 text-sm font-semibold text-brand">
              <ShieldCheckIcon className="h-5 w-5" />
              Garantie d&apos;authenticité
            </span>

            <h2 className="mt-6 text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
              Chaque paire vérifiée par nos <span className="text-brand">experts</span>
            </h2>

            <p className="mt-5 text-lg text-neutral-600">
              Notre équipe d&apos;authenticateurs certifiés inspecte minutieusement
              chaque sneaker avant expédition. Semelles, coutures, étiquettes,
              boîtes — rien n&apos;échappe à notre contrôle qualité.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircleIcon className="h-6 w-6 flex-none text-brand" />
                  <span className="font-semibold text-ink">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Droite : carte stat */}
          <div className="flex flex-col items-center justify-center rounded-3xl border border-neutral-200 bg-paper p-12 text-center">
            <ShieldCheckIcon className="h-16 w-16 text-brand" />
            <p className="mt-6 text-5xl font-extrabold text-ink">10 000+</p>
            <p className="mt-2 text-lg text-neutral-600">paires authentifiées</p>
          </div>
        </div>
      </div>
    </section>
  );
}