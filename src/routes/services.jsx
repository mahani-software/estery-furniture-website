import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Estery Furniture Kampala" },
      { name: "description", content: "Bespoke furniture design, interior styling, corporate fit-outs, delivery and after-care from Estery Furniture in Kampala." },
      { property: "og:title", content: "Services — Estery Furniture" },
      { property: "og:description", content: "Bespoke design, corporate fit-outs, delivery and after-care." },
    ],
  }),
  component: Services,
});

const services = [
  { t: "Bespoke Design", d: "Work one-on-one with our design team to create pieces built to your exact space, materials and vision." },
  { t: "Interior Styling", d: "Full-room styling with a curated mix of our collection and complementary accessories." },
  { t: "Corporate Fit-Outs", d: "Office, hotel and restaurant furniture at scale — designed, produced and installed by one team." },
  { t: "White-Glove Delivery", d: "Assembly, placement and packaging removal, free within Kampala and available across Uganda." },
  { t: "Restoration & Reupholstery", d: "Bring your heirloom pieces back to life in our workshop — new joinery, new fabric, same soul." },
  { t: "5-Year Guarantee", d: "Every Estery piece is backed by a full five-year structural guarantee and lifetime after-care." },
];

function Services() {
  return (
    <SiteShell>
      <section className="border-b border-border bg-secondary/40 py-8">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.35em] text-accent">What we do</div>
          <h1 className="mt-2 text-4xl md:text-5xl">Services & craftsmanship</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">From a single armchair to a full hotel fit-out, Estery handles design, build and delivery in-house.</p>
        </div>
      </section>
      <section className="container-x py-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.t} className="hover-lift rounded-xl border border-border bg-card p-8">
              <div className="font-display text-2xl text-primary">{s.t}</div>
              <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
