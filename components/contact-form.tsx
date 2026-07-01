"use client";

import { useState } from "react";

const CONTACT_EMAIL = "contact@sneakerstore.fr";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject || "Contact Sneakerstore",
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-ink">
          Nom
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-ink outline-none transition focus:border-brand"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-ink">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-ink outline-none transition focus:border-brand"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-ink">
          Sujet
        </label>
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-ink outline-none transition focus:border-brand"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-ink outline-none transition focus:border-brand"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center rounded-full bg-brand px-7 py-3.5 font-semibold text-ink transition hover:bg-brand-dark"
      >
        Envoyer le message
      </button>
    </form>
  );
}
