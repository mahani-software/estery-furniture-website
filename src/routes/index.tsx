import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteChrome";
import { categories, products, formatUGX } from "@/lib/products";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Estery Furniture — Kampala's Home for Handcrafted Furniture" },
      { name: "description", content: "Discover sofas, beds, dining tables, office pieces and accessories handcrafted in Kampala by Estery Furniture." },
      { property: "og:title", content: "Estery Furniture — Kampala" },
      { property: "og:description", content: "Sofas, beds, dining, office and accessories — handcrafted in Kampala." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = products.slice(0, 8);
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={hero} alt="Estery Furniture showroom" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1200} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/50 to-primary/85" />
        <div className="container-x relative flex min-h-[85vh] flex-col items-center justify-center py-8 text-center text-primary-foreground">
          <img src={logo} alt="Estery Furniture" className="h-48 w-48 object-contain drop-shadow-2xl md:h-64 md:w-64" width={256} height={256} />
          <h1 className="mt-2 max-w-3xl text-4xl leading-tight md:text-6xl">
            Furniture that tells your story.
          </h1>
          <p className="mt-3 max-w-xl text-base text-primary-foreground/85 md:text-lg">
            Handcrafted sofas, beds, dining tables and accessories — designed and built in Kampala for homes that last a lifetime.
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <Link to="/shop" className="rounded-full bg-accent px-7 py-3 text-sm font-medium text-accent-foreground transition hover:bg-accent/90">
              Shop the Collection
            </Link>
            <Link to="/gallery" className="rounded-full border border-primary-foreground/60 px-7 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary-foreground/10">
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container-x py-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-accent">Collections</div>
            <h2 className="mt-2 text-3xl md:text-4xl">Explore every room</h2>
          </div>
          <Link to="/shop" className="hidden text-sm text-accent hover:underline md:block">Browse all →</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const cover = products.find((p) => p.category === c.slug);
            return (
              <Link
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="hover-lift group relative block h-72 overflow-hidden rounded-2xl"
              >
                <img src={cover?.img} alt={c.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <div className="font-display text-2xl">{c.name}</div>
                  <div className="mt-1 text-sm text-primary-foreground/80">{c.desc}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-secondary/50 py-8">
        <div className="container-x">
          <div className="mb-6 text-center">
            <div className="text-xs uppercase tracking-[0.35em] text-accent">Featured</div>
            <h2 className="mt-2 text-3xl md:text-4xl">This season's favourites</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <Link
                key={p.id}
                to="/products/$id"
                params={{ id: p.id }}
                className="hover-lift group block overflow-hidden rounded-xl bg-card"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <div className="text-sm font-medium text-foreground">{p.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{formatUGX(p.price)}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-2 text-center">
            <Link to="/shop" className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-accent hover:text-accent-foreground">
              View all pieces
            </Link>
          </div>
        </div>
      </section>

      {/* Story strip */}
      <section className="container-x grid gap-4 py-8 md:grid-cols-2 md:items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-accent">Our Story</div>
          <h2 className="mt-2 text-3xl md:text-4xl">Made in Kampala. Made to last.</h2>
          <p className="mt-3 text-muted-foreground">
            For over a decade, Estery has partnered with Ugandan artisans to build furniture that pairs local craft with contemporary design.
            Every piece is joined by hand, finished in our Ntinda workshop, and delivered white-glove across East Africa.
          </p>
          <Link to="/about" className="mt-2 inline-block text-sm font-medium text-accent hover:underline">
            Read our story →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {products.slice(8, 12).map((p) => (
            <Link key={p.id} to="/products/$id" params={{ id: p.id }} className="hover-lift overflow-hidden rounded-xl">
              <img src={p.img} alt={p.name} loading="lazy" className="aspect-square w-full object-cover" />
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
