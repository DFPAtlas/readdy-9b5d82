import { Link, Outlet, useLocation } from "react-router-dom";
import { ChildProvider } from "@/components/parent/ChildProvider";
import { ChildSwitcher } from "@/components/parent/ChildSwitcher";
import { cn } from "@/lib/utils";

function HouseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 10.75 12 3.5l8.5 7.25" />
      <path d="M5.75 9.5V20h12.5V9.5" />
      <path d="M10 20v-5.25h4V20" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.75h17" />
      <path d="M8 3.5v3" />
      <path d="M16 3.5v3" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8.5" r="3.75" />
      <path d="M4.75 20.25c0-3.6 3.25-6 7.25-6s7.25 2.4 7.25 6" />
    </svg>
  );
}

const NAV_ITEMS = [
  { to: "/app/today", label: "Today", Icon: HouseIcon },
  { to: "/app/week", label: "This week", Icon: CalendarIcon },
];

export default function AppLayout() {
  const { pathname } = useLocation();

  return (
    <ChildProvider>
      <div className="flex min-h-screen w-full flex-col bg-paper min-[900px]:flex-row">
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 border-b border-line bg-paper">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 px-4 py-2 min-[900px]:h-[60px] min-[900px]:flex-nowrap min-[900px]:px-5 min-[900px]:py-0">
              <Link
                to="/app/today"
                className="inline-flex min-h-[44px] items-center font-display text-[23px] font-semibold leading-none text-ink whitespace-nowrap"
              >
                Dueby
              </Link>

              <ChildSwitcher className="order-3 w-full min-[900px]:order-2 min-[900px]:w-auto min-[900px]:max-w-[420px] min-[900px]:flex-1" />

              <Link
                to="/app/account"
                aria-label="Account"
                className="order-2 ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors min-[900px]:order-3 min-[900px]:ml-0"
              >
                <AccountIcon />
              </Link>
            </div>
          </header>

          <main
            id="main"
            className="min-w-0 flex-1 px-4 pt-4 pb-[calc(54px_+_env(safe-area-inset-bottom))] min-[900px]:px-6 min-[900px]:pt-6 min-[900px]:pb-6"
          >
            <Outlet />
          </main>
        </div>

        <nav
          aria-label="App"
          className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] min-[900px]:static min-[900px]:order-first min-[900px]:w-[232px] min-[900px]:shrink-0 min-[900px]:border-t-0 min-[900px]:border-r min-[900px]:border-line min-[900px]:pb-0"
        >
          <ul className="flex min-[900px]:h-full min-[900px]:flex-col">
            {NAV_ITEMS.map(({ to, label, Icon }) => {
              const active = pathname === to;

              return (
                <li key={to} className="flex-1 min-[900px]:flex-none">
                  <Link
                    to={to}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex h-[54px] w-full items-center justify-center gap-2 text-[14px] font-bold whitespace-nowrap transition-colors hover:bg-accent-soft min-[900px]:justify-start min-[900px]:px-5",
                      active ? "text-accent" : "text-ink-3",
                    )}
                  >
                    <Icon />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </ChildProvider>
  );
}