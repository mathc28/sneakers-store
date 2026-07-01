import { MagnifyingGlassIcon, ShieldCheckIcon, TruckIcon } from "@heroicons/react/24/outline";

const steps = [
  {
    icon: MagnifyingGlassIcon,
    title: "Explore",
    description: "Parcours notre sélection curatée de sneakers authentiques.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Authentifie",
    description: "Nos experts vérifient chaque paire avant expédition.",
  },
  {
    icon: TruckIcon,
    title: "Reçois",
    description: "Livraison express en 48h, emballage premium garanti.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight text-ink sm:text-5xl">
            Comment <span className="text-brand">ça marche</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Trois étapes simples pour recevoir ta paire authentique.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-neutral-200 bg-white px-6 pb-8 pt-10 text-center"
            >
              <span className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-brand font-bold text-ink">
                {index + 1}
              </span>

              <step.icon className="mx-auto h-10 w-10 text-brand" />
              <h3 className="mt-5 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-3 text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}