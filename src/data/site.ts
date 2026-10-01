/**
 * Non-translatable configuration for the portfolio.
 * All copy lives in src/i18n/content.ts.
 */

export const site = {
  /**
   * Site origin used to build absolute URLs for SEO/OG metadata
   * (canonical, og:url, sitemap, robots).
   * Update this when the site moves to its final host.
   */
  url: "https://naif-portfolio.naifalghamdi.workers.dev",
  /**
   * Bump this whenever public/og-image.png changes. Social platforms cache an
   * og:image by its exact URL, so a new file at the same path keeps serving the
   * old artwork. The query string makes the URL change, forcing a re-scrape.
   */
  ogImageVersion: "2",
  year: "2026",
  email: "naif.alghamdi1@outlook.com",
  // Put your PDF at public/resume.pdf, or point this at an external URL.
  resumeUrl: "/resume.pdf",
  /**
   * Leave a link empty ("") and it will simply not be rendered.
   */
  socials: {
    linkedin: "https://www.linkedin.com/in/naif-alghamdi-44903a434/",
    github: "https://github.com/NAIFDev1",
  },
  /**
   * Contact form endpoint (Formspree, Getform, your own API, ...).
   * While this is empty the form falls back to opening the visitor's
   * email client with the message pre-filled.
   */
  contactEndpoint: "",
};
