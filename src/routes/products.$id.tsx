import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteChrome";
import { getProduct, products, categories, formatUGX } from "@/lib/products";

export const Route = createFileRoute("/products/$id")({
  head: ({ params }) => {
    const p = getProduct(params.id);
    if (!p) return { meta: [{ title: "Product not found — Estery Furniture" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${p.name} — Estery Furniture` },
        { name: "description", content: p.desc },
        { property: "og:title", content: `${p.name} — Estery Furniture` },
        { property: "og:description", content: p.desc },
        { property: "og:image", content: p.img },
        { name: "twitter:image", content: p.img },
      ],
    };
  },
  loader: ({ params }) => {
    const p = getProduct(params.id);
    if (!p) throw notFound();
    return p;
  },
  component: ProductPage,
});

function ProductPage() {
  const p = Route.useLoaderData();
  const cat = categories.find((c) => c.slug === p.category);
  const related = products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4);

  return (
    <SiteShell>
      <section className="container-x py-10">
        <nav className="mb-6 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-accent">Home</Link> ·{" "}
          <Link to="/shop" className="hover:text-accent">Shop</Link> ·{" "}
          <Link to="/category/$slug" params={{ slug: p.category }} className="hover:text-accent">{cat?.name}</Link>
        </nav>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-secondary">
            <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-accent">{cat?.name}</div>
            <h1 className="mt-2 text-4xl md:text-5xl">{p.name}</h1>
            <div className="mt-2 text-2xl text-primary">{formatUGX(p.price)}</div>
            <p className="mt-2 text-muted-foreground">{p.desc}</p>

            <div className="mt-3 grid grid-cols-2 gap-4 rounded-xl border border-border bg-card p-5 text-sm">
              <div><div className="text-xs uppercase tracking-widest text-accent">Materials</div><div className="mt-1">Solid hardwood, brass hardware</div></div>
              <div><div className="text-xs uppercase tracking-widest text-accent">Lead time</div><div className="mt-1">3–5 weeks</div></div>
              <div><div className="text-xs uppercase tracking-widest text-accent">Warranty</div><div className="mt-1">5 years</div></div>
              <div><div className="text-xs uppercase tracking-widest text-accent">Delivery</div><div className="mt-1">Free within Kampala</div></div>
            </div>

            <div className="mt-3 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                Request a quote
              </Link>
              <a href="tel:+256776804433" className="rounded-full border border-border px-7 py-3 text-sm font-medium hover:border-accent hover:text-accent">
                Call the showroom
              </a>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-x pb-12">
          <h2 className="mb-5 text-2xl">You may also like</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link key={r.id} to="/products/$id" params={{ id: r.id }} className="hover-lift group block overflow-hidden rounded-xl bg-card">
                <div className="aspect-square overflow-hidden">
                  <img src={r.img} alt={r.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{formatUGX(r.price)}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </SiteShell>
  );
}