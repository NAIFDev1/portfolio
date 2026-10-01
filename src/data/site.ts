/**
 * Non-translatable configuration for the portfolio.
 * All copy lives in src/i18n/content.ts.
 */

export const site = {
  /**
   * Site origin used to build absolute URLs for SEO/OG metadata.
   * Set this before deploying (e.g. "https://your-domain.com").
   * While empty, metadata uses relative URLs.
   */
  url: "",
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
