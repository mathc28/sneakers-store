import Footer from "components/layout/footer";
import ContactForm from "components/contact-form";

export const metadata = {
  title: "Contact",
  description:
    "Une question sur une commande, une vente ou un nettoyage ? Contactez l'équipe Sneakerstore.",
};

const infos = [
  {
    label: "Email",
    value: "contact@sneakerstore.fr",
    href: "mailto:contact@sneakerstore.fr",
  },
  {
    label: "Téléphone",
    value: "01 23 45 67 89",
    href: "tel:+33123456789",
  },
  {
    label: "Adresse",
    value: "12 rue des Sneakers, 75011 Paris",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-8xl px-4 py-8 lg:px-8 lg:py-12">
          <h1 className="text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Contactez<br />
            <span className="text-brand">notre équipe</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-neutral-600">
            Une question sur une commande, une vente ou un nettoyage ?
            Écrivez-nous, on vous répond rapidement.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-8xl gap-12 px-4 pb-16 lg:grid-cols-2 lg:gap-8 lg:px-8">
          <ContactForm />

          <div>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-ink">
              Nos coordonnées
            </h2>
            <div className="mt-6 divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              {infos.map((info) => (
                <div key={info.label} className="flex items-center justify-between gap-4 px-6 py-5">
                  <p className="font-semibold text-ink">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-sm text-neutral-600 transition hover:text-brand">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-neutral-600">{info.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
