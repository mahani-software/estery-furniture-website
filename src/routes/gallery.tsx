import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteChrome";
import { products, galleryImages } from "@/lib/products";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Showroom Gallery — Estery Furniture Kampala" },
      { name: "description", content: "A visual tour of Estery Furniture pieces styled in real Kampala homes and interiors." },
      { property: "og:title", content: "Showroom Gallery — Estery Furniture" },
      { property: "og:description", content: "A visual tour of our handcrafted furniture in real interiors." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  // Interleave product shots with room shots for a rich masonry
  const all = [
    ...products.map((p) => ({ src: p.img, alt: p.name, id: p.id })),
    ...galleryImages.map((src, i) => ({ src, alt: `Estery interior ${i + 1}`, id: products[i % products.length].id })),
  ];

  return (
    <SiteShell>
      <section className="border-b border-border bg-secondary/40 py-8">
        <div className="container-x text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-accent">Gallery</div>
          <h1 className="mt-2 text-4xl md:text-5xl">Estery in real homes</h1>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Click any image to explore the piece featured in the scene.
          </p>
        </div>
      </section>

      <section className="container-x py-8">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [column-fill:_balance]">
          {all.map((img, idx) => (
            <Link
              key={idx}
              to="/products/$id"
              params={{ id: img.id }}
              className="hover-lift mb-4 block break-inside-avoid overflow-hidden rounded-xl"
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full transition-transform duration-700 hover:scale-[1.03]" />
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}