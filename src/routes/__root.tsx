import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "../i18n/provider";
import { ThemeProvider } from "../lib/theme";
import { site } from "../data/site";

const bootstrapScript = `(function(){try{var t=localStorage.getItem('na-theme')||'dark';document.documentElement.classList.toggle('dark',t!=='light');var l=localStorage.getItem('na-lang')||'en';document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';}catch(e){}})();`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-background px-6 py-10 sm:px-10">
      <span className="eyebrow">Naif Alghamdi / 404</span>
      <div>
        <h1 className="text-[clamp(4rem,18vw,12rem)] leading-none font-semibold tracking-[-0.05em]">
          404
        </h1>
        <p className="serif-italic mt-4 text-2xl text-muted-foreground">
          Looks like this page got lost.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-transform duration-500 hover:-translate-y-0.5"
        >
          Back home <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <span className="eyebrow">Front-End Developer</span>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Naif Alghamdi" },
      { property: "og:site_name", content: "Naif Alghamdi" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${site.url}/og-image.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Naif Alghamdi — Front-End Developer" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${site.url}/og-image.png` },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [{ children: bootstrapScript }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" className="dark" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <I18nProvider>
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </I18nProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
