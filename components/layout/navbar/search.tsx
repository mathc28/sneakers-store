"use client";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Form from "next/form";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // focus automatique à l'ouverture
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // fermeture avec Échap
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Form action="/search" className="relative flex items-center">
      <input
        ref={inputRef}
        key={searchParams?.get("q")}
        type="text"
        name="q"
        placeholder="Rechercher des sneakers..."
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
        className={`rounded-full bg-neutral-100 text-sm text-ink placeholder:text-neutral-400 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-brand ${
          open ? "w-44 px-4 py-1.5 opacity-100 md:w-64" : "w-0 border-0 px-0 py-1.5 opacity-0"
        }`}
      />
      <button
        type="button"
        aria-label={open ? "Fermer la recherche" : "Rechercher"}
        onClick={() => setOpen((v) => !v)}
        className="ml-1 flex-none text-ink transition-colors hover:text-brand"
      >
        {open ? (
          <XMarkIcon className="h-5 w-5" />
        ) : (
          <MagnifyingGlassIcon className="h-5 w-5" />
        )}
      </button>
    </Form>
  );
}

export function SearchSkeleton() {
  return (
    <div className="ml-1 flex-none text-ink">
      <MagnifyingGlassIcon className="h-5 w-5" />
    </div>
  );
}