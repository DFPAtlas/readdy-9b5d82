import type { RouteObject } from "react-router-dom";
import MarketingLayout from "@/pages/marketing/layout";
import AppLayout from "@/pages/app/layout";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/home/page";
import Privacy from "@/pages/privacy/page";
import Accessibility from "@/pages/accessibility/page";
import Demo from "@/pages/demo/page";
import Login from "@/pages/login/page";
import CheckEmail from "@/pages/login/check-email/page";
import AppIndex from "@/pages/app/page";
import Today from "@/pages/app/today/page";
import Week from "@/pages/app/week/page";
import HomeworkDetail from "@/pages/app/homework/[id]/page";
import HomeworkHelp from "@/pages/app/homework/[id]/help/page";
import Account from "@/pages/app/account/page";

const routes: RouteObject[] = [
  {
    element: <MarketingLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/accessibility", element: <Accessibility /> },
      { path: "/demo", element: <Demo /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/check-email",
    element: <CheckEmail />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      { index: true, element: <AppIndex /> },
      { path: "today", element: <Today /> },
      { path: "week", element: <Week /> },
      { path: "homework/:id", element: <HomeworkDetail /> },
      { path: "homework/:id/help", element: <HomeworkHelp /> },
      { path: "account", element: <Account /> },
    ],
  },
];

export default routes;