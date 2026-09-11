import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteChrome";
import { products } from "@/lib/products";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Estery Furniture — Handcrafted in Kampala" },
      { name: "description", content: "Estery Furniture has been designing and building furniture in Kampala since 2011. Meet the workshop, the craft and the people." },
      { property: "og:title", content: "About Estery Furniture" },
      { property: "og:description", content: "Designing and building furniture in Kampala since 2011." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteShell>
      <section className="container-x grid gap-4 py-10 md:grid-cols-2 md:items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-accent">Our Story</div>
          <h1 className="mt-2 text-4xl md:text-5xl">Kampala craft, quietly considered.</h1>
          <p className="mt-2 text-muted-foreground">
            Estery Furniture was founded in 2011 by a small team of Ugandan carpenters and designers who wanted to build furniture the old way — joinery over screws, oil over lacquer, patience over shortcuts.
          </p>
          <p className="mt-2 text-muted-foreground">
            Today our Ntinda workshop employs 34 artisans and ships across East Africa. Every piece is made to order, signed by its maker, and backed by a five-year guarantee.
          </p>
        </div>
        <Link to="/products/$id" params={{ id: products[0].id }} className="hover-lift overflow-hidden rounded-2xl">
          <img src={products[0].img} alt={products[0].name} loading="lazy" className="w-full" />
        </Link>
      </section>

      <section className="bg-secondary/40 py-10">
        <div className="container-x grid gap-4 md:grid-cols-3">
          {[
            { n: "34", l: "Artisans in our workshop" },
            { n: "5,200+", l: "Pieces delivered since 2011" },
            { n: "5 yrs", l: "Guarantee on every piece" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl border border-border bg-card p-8 text-center">
              <div className="font-display text-5xl text-accent">{s.n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-10">
        <h2 className="mb-5 text-3xl">Inside the workshop</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(2, 8).map((p) => (
            <Link key={p.id} to="/products/$id" params={{ id: p.id }} className="hover-lift block overflow-hidden rounded-xl">
              <img src={p.img} alt={p.name} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
