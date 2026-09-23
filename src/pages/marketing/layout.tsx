import { Outlet } from "react-router-dom";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { SiteFooter } from "@/components/marketing/SiteFooter";

export default function MarketingLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-paper">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="w-full flex-1 px-5 py-12 md:px-20">
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  );
}