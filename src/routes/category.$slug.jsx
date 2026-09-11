import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteChrome";
import { categories, getByCategory, formatUGX } from "@/lib/products";

export const Route = createFileRoute("/category/$slug")({
  head: ({ params }) => {
    const c = categories.find((x) => x.slug === params.slug);
    if (!c) return { meta: [{ title: "Category — Estery Furniture" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${c.name} — Estery Furniture` },
        { name: "description", content: `${c.name}: ${c.desc}. Handcrafted by Estery Furniture in Kampala.` },
        { property: "og:title", content: `${c.name} — Estery Furniture` },
        { property: "og:description", content: c.desc },
      ],
    };
  },
  loader: ({ params }) => {
    const c = categories.find((x) => x.slug === params.slug);
    if (!c) throw notFound();
    return { category: c, items: getByCategory(params.slug) };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, items } = Route.useLoaderData();
  return (
    <SiteShell>
      <section className="border-b border-border bg-secondary/40 py-8">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.35em] text-accent">Collection</div>
          <h1 className="mt-2 text-4xl md:text-5xl">{category.name}</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">{category.desc}</p>
        </div>
      </section>
      <section className="container-x py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((p) => (
            <Link key={p.id} to="/products/$id" params={{ id: p.id }} className="hover-lift group block overflow-hidden rounded-xl bg-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="text-sm font-medium">{p.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{formatUGX(p.price)}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
