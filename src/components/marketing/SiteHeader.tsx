import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const basePath = __BASE_PATH__.split("/").filter(Boolean).join("/");
const pathPrefix = basePath ? `/${basePath}` : "";

const NAV_LINKS = [
  { to: "/#parents", label: "For parents" },
  { to: "/#schools", label: "For schools" },
  { to: "/privacy", label: "Privacy" },
];

export function SiteHeader() {
  const navigate = useNavigate();

  return (
    <header className="w-full border-b border-line bg-paper">
      <div className="flex min-h-16 flex-wrap items-center gap-x-6 gap-y-2 px-5 py-2 md:min-h-[84px] md:gap-x-10 md:px-20 md:py-0">
        <Link
          to="/"
          className="inline-flex min-h-[44px] items-center font-display text-[28px] font-semibold leading-none text-ink whitespace-nowrap"
        >
          Dueby
        </Link>

        <nav aria-label="Main" className="hidden md:flex md:items-center md:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex h-11 items-center text-[16px] font-bold text-ink whitespace-nowrap transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Button
            variant="outline"
            href={`${pathPrefix}/login`}
            onClick={(event) => {
              event.preventDefault();
              navigate("/login");
            }}
          >
            Parent log in
          </Button>

          <span className="hidden md:block">
            <Button
              variant="primary"
              href={`${pathPrefix}/demo`}
              onClick={(event) => {
                event.preventDefault();
                navigate("/demo");
              }}
            >
              Book a demo
            </Button>
          </span>
        </div>
      </div>
    </header>
  );
}