import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  { to: "/privacy", label: "Privacy" },
  { to: "/accessibility", label: "Accessibility" },
  { to: "/demo", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 px-5 py-9 text-[15px] text-ink-3 md:px-20">
        <Link
          to="/"
          className="inline-flex min-h-[44px] items-center font-display text-[19px] font-semibold text-ink whitespace-nowrap"
        >
          Dueby
        </Link>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="inline-flex min-h-[44px] items-center whitespace-nowrap text-ink-3 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="w-full text-[15px] text-ink-3 md:ml-auto md:w-auto md:whitespace-nowrap">
          © 2026 Digital Footprint Group
        </p>
      </div>
    </footer>
  );
}