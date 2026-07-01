import Link from "next/link";

const aideLinks = [
  { label: "Comment ça marche", href: "/comment-ca-marche" },
  { label: "Authentification", href: "/authentification" },
  { label: "Livraison", href: "/livraison" },
  { label: "Retours", href: "/retours" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Marque */}
          <div>
            <Link href="/" className="text-2xl font-extrabold uppercase tracking-tight text-ink">
              Sneaker<span className="text-brand">store</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-neutral-600">
              La marketplace de sneakers authentiques. Chaque paire est vérifiée,
              chaque transaction est sécurisée.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="https://instagram.com" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-ink transition hover:border-brand hover:text-brand">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.12 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.9 5.9 0 0 0 1.38 2.12 5.9 5.9 0 0 0 2.12 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.12-1.38 5.9 5.9 0 0 0 1.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.12A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.41-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                </svg>
              </a>
              <a href="https://x.com" aria-label="X" className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-ink transition hover:border-brand hover:text-brand">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Aide */}
          <div>
            <h3 className="text-sm font-bold text-ink">Aide</h3>
            <ul className="mt-3 space-y-2">
              {aideLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-neutral-600 transition hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bas */}
        <div className="mt-8 flex flex-col gap-3 border-t border-neutral-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Sneakerstore. Tous droits réservés.
          </p>
          <div className="flex gap-5 text-xs text-neutral-500">
            <Link href="/cgv" className="transition hover:text-brand">CGV</Link>
            <Link href="/confidentialite" className="transition hover:text-brand">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
