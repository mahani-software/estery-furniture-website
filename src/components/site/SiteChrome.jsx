import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/gallery", label: "Gallery" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Estery Furniture" className="h-14 w-14 object-contain" width={56} height={56} />
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wide text-primary">ESTERY</div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-accent">Furniture · Kampala</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:inline-block"
        >
          Visit Showroom
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="container-x grid gap-5 py-8 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl">ESTERY FURNITURE</div>
          <p className="mt-3 text-sm text-primary-foreground/70">
            Handcrafted furniture and accessories for modern Ugandan homes and offices. Designed and built in Kampala since 2011.
          </p>
        </div>
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Showroom</div>
          <p className="text-sm text-primary-foreground/80">Plot 42, Ntinda Industrial Area<br />Kampala, Uganda</p>
          <p className="mt-3 text-sm">Mon–Sat · 9:00–19:00</p>
        </div>
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Contact</div>
          <p className="text-sm">+256 700 123 456</p>
          <p className="text-sm">hello@estery.co.ug</p>
        </div>
        <div>
          <div className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Explore</div>
          <ul className="space-y-1 text-sm">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-accent">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Estery Furniture Ltd. All rights reserved.
      </div>
    </footer>
  );
}

export function SiteShell({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}