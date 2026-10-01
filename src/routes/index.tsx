import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Cursor } from "@/components/Cursor";
import { Marquee } from "@/components/Marquee";
import { Hero } from "@/sections/Hero";
import {
  About,
  Certificates,
  Education,
  Experience,
  Focus,
  Process,
  Skills,
  Statement,
} from "@/sections/Content";
import { Work } from "@/sections/Work";
import { Contact, Footer } from "@/sections/Contact";
import { useRevealObserver } from "@/hooks/use-portfolio";
import { contentEn } from "@/i18n/content";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/provider";

const title = "Naif Alghamdi — Front-End Developer";
const description =
  "Portfolio of Naif Alghamdi, a Front-End Developer focused on building clean, responsive and engaging digital experiences. Available in English and Arabic.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${site.url}/` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${site.url}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: contentEn.name,
          jobTitle: contentEn.role,
          url: `${site.url}/`,
          sameAs: [site.socials.linkedin, site.socials.github].filter(Boolean),
          address: { "@type": "PostalAddress", addressLocality: "Riyadh", addressCountry: "SA" },
          alumniOf: "College of Communications & Information in Riyadh",
          knowsAbout: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Responsive Web Design",
            "Git",
            "SQL",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  const { t } = useI18n();
  useRevealObserver();

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        {t.ui.skipToContent}
      </a>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Statement />
        <Work />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <Focus />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
