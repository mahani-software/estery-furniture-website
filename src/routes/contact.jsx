import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Showroom — Estery Furniture Kampala" },
      { name: "description", content: "Visit our Ntinda showroom in Kampala or send us a message. We reply within one business day." },
      { property: "og:title", content: "Contact Estery Furniture" },
      { property: "og:description", content: "Visit our Ntinda showroom in Kampala or send us a message." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteShell>
      <section className="container-x grid gap-4 py-10 lg:grid-cols-2">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-accent">Get in touch</div>
          <h1 className="mt-2 text-4xl md:text-5xl">Visit our Kampala showroom</h1>
          <p className="mt-2 text-muted-foreground">
            Come see, touch and sit on every piece before you commit. Our design team is on hand to help you plan a room, a home or a full project.
          </p>
          <div className="mt-3 space-y-4 text-sm">
            <div><div className="text-xs uppercase tracking-widest text-accent">Showroom</div><div className="mt-1">Kubiri, Wandegeya - Kalerwe, Gayaza road, Kampala</div></div>
            <div><div className="text-xs uppercase tracking-widest text-accent">Hours</div><div className="mt-1">Mon–Sat · 9:00–19:00</div></div>
            <div><div className="text-xs uppercase tracking-widest text-accent">Phone</div><div className="mt-1">+256-776-804433</div></div>
            <div><div className="text-xs uppercase tracking-widest text-accent">Email</div><div className="mt-1">esteryfurniture2@gmail.com</div></div>
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-card p-8"
        >
          {sent ? (
            <div className="py-8 text-center">
              <div className="font-display text-2xl text-primary">Thank you.</div>
              <p className="mt-2 text-muted-foreground">We'll reply within one business day.</p>
            </div>
          ) : (
            <>
              <label className="block text-xs uppercase tracking-widest text-accent">Name</label>
              <input required className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
              <label className="mt-2 block text-xs uppercase tracking-widest text-accent">Email</label>
              <input required type="email" className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
              <label className="mt-2 block text-xs uppercase tracking-widest text-accent">Phone (optional)</label>
              <input className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
              <label className="mt-2 block text-xs uppercase tracking-widest text-accent">How can we help?</label>
              <textarea required rows={5} className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
              <button type="submit" className="mt-2 w-full rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                Send message
              </button>
            </>
          )}
        </form>
      </section>
    </SiteShell>
  );
}
