import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteChrome";
import { products, categories, formatUGX } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop All Furniture — Estery Furniture Kampala" },
      { name: "description", content: "Browse the full Estery Furniture collection: sofa sets, beds, dining sets, office desks, TV stands, doors and kids furniture." },
      { property: "og:title", content: "Shop All Furniture — Estery Furniture" },
      { property: "og:description", content: "The full Estery collection — handcrafted in Kampala." },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <SiteShell>
      <section className="border-b border-border bg-secondary/40 py-8">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.35em] text-accent">The Collection</div>
          <h1 className="mt-2 text-4xl md:text-5xl">Shop all furniture</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Every piece is designed in-house and built by artisans in our Kampala workshop. Click any image to see full details.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground hover:border-accent hover:text-accent"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <Link
              key={p.id}
              to="/products/$id"
              params={{ id: p.id }}
              className="hover-lift group block overflow-hidden rounded-xl bg-card"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="text-xs uppercase tracking-widest text-accent">
                  {categories.find((c) => c.slug === p.category)?.name}
                </div>
                <div className="mt-1 text-sm font-medium">{p.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{formatUGX(p.price)}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
