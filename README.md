# Naif Alghamdi — Portfolio

Personal portfolio website for **Naif Alghamdi**, front-end developer. Fully bilingual (**Arabic / English**) with complete RTL support.

---

## ⚠️ Read this first: the live link still shows the old version

The public URL **[naifdev1.github.io/portfolio](https://naifdev1.github.io/portfolio)** currently serves the **previous version** of this portfolio — not the code in this repository.

The code here is a **complete rewrite** and has **not been deployed yet**:

- This project builds for **Cloudflare Workers** (Nitro, `cloudflare-module` preset), **not** GitHub Pages.
- The old site is still being served from the `gh-pages` branch of this repository.
- The metadata origin is set once in `src/data/site.ts` (`site.url`), and `public/sitemap.xml` and `public/robots.txt` use the same origin. Update `site.url` if the site moves to a different host.

So: browsing the live link today = old portfolio. This repository = the new one.

---

## Highlights

- **Bilingual EN/AR** with a language toggle, full RTL layout, and persisted preference.
- **Light / dark theme** with no flash on first paint.
- **Sections**: hero, work (3 case studies with a detail modal), about, skills, experience, certificates, contact.
- **Performance-minded**:
  - Self-hosted fonts (variable Outfit + IBM Plex Sans Arabic) — **zero external font requests**.
  - Route prerendered to static HTML, so the page is served as a file, not rendered per request.
  - Unused component libraries and 121 unused dependencies removed.
  - Custom cursor that pauses when idle and never re-renders on pointer movement.
  - Decorative animation limited to large screens and fine pointers, and disabled under `prefers-reduced-motion`.
- **Accessibility**: skip link, semantic landmarks, visible focus states, `prefers-reduced-motion` support.
- **SEO**: meta/Open Graph/Twitter cards, canonical URL, JSON-LD, `robots.txt`, `sitemap.xml`.
- **CI**: GitHub Actions runs lint, typecheck, and build on every push.

## Tech stack

| Layer            | Choice                                                       |
| ---------------- | ------------------------------------------------------------ |
| Framework        | TanStack Start (React 19) + TanStack Router & Query           |
| Language         | TypeScript (strict)                                          |
| Build            | Vite 8                                                       |
| Styling          | Tailwind CSS v4 + `tw-animate-css`                           |
| Server / hosting | Nitro 3 → Cloudflare Workers (`cloudflare-module` preset)     |
| Icons            | `lucide-react`                                               |
| Fonts            | Fontsource — Outfit (variable) + IBM Plex Sans Arabic        |
| Utilities        | `clsx`, `tailwind-merge`                                     |

## Getting started

Requires Node.js 20+ (developed on Node 24) and npm.

```sh
git clone https://github.com/NAIFDev1/portfolio.git
cd portfolio
npm ci
npm run dev
```

## Scripts

| Script              | What it does                                                |
| ------------------- | ----------------------------------------------------------- |
| `npm run dev`       | Start the dev server                                        |
| `npm run build`     | Production build into `.output/`                             |
| `npm run postbuild` | Restores the Cloudflare config if the build did not emit it  |
| `npm run lint`      | ESLint                                                      |
| `npm run typecheck` | `tsc --noEmit`                                              |
| `npm run format`    | Prettier                                                    |

`postbuild` runs automatically after every build.

## Deployment

The build outputs a Nitro server bundle plus a prerendered static page in `.output/public/`.

```sh
npm run build
npx wrangler deploy
```

To preview the production output locally:

```sh
npx wrangler dev --config .output/server/wrangler.json
```

### Why the `postbuild` script exists

Enabling `tanstackStart.prerender` prevents Nitro from writing the Cloudflare config files
(`.output/server/wrangler.json` and `.wrangler/deploy/config.json`) during a local build.
`scripts/ensure-cloudflare-config.mjs` regenerates them when they are missing, so a manual
`wrangler deploy` keeps working. It only writes files that do not already exist, so it never
overrides a config produced by a real platform build.

## Project structure

```
src/
├── components/     # Nav, Cursor, Marquee, shared UI bits
├── data/           # site.ts — non-translatable config (email, socials, resume URL)
├── i18n/           # content.ts (all copy, EN + AR) and the language provider
├── lib/            # theme, error pages, utilities
├── routes/         # file-based routes and the document head
├── sections/       # page sections (Hero, Work, Content, Contact …)
├── assets/         # images and self-hosted font imports
└── styles.css      # Tailwind entry, design tokens, fonts
```

All user-facing copy lives in `src/i18n/content.ts` in both languages. `src/data/site.ts` holds
the configuration that is not translated (email, social links, resume URL).

## Featured work

- **Khabir** — AI-powered resume analyzer. React, TypeScript, Node.js, Express, PostgreSQL, Tailwind CSS.
- **NOVA** — SaaS product landing page. React, Tailwind CSS, shadcn/ui, Framer Motion.
  [Live demo](https://naifdev1.github.io/nova-landing-page/) ·
  [Source](https://github.com/NAIFDev1/nova-landing-page)
- **Forge** — developer platform landing page. React, Three.js, Tailwind CSS, Framer Motion.

NOVA and Forge are self-initiated concept projects. Their brands, companies, and data are
fictional and exist only as design and engineering exercises.

## Credits

This project started as a scaffold created with **[Lovable](https://lovable.dev)**, which
provided the initial TanStack Start setup and build tooling.

The content, features, performance work, deployment configuration, and documentation in this
repository were developed **with the assistance of an AI coding assistant**.

All of the code is owned, reviewed, and maintained by the author.

## Contact

- Email: `naif.alghamdi1@outlook.com`
- LinkedIn: [linkedin.com/in/naif-alghamdi-44903a434](https://www.linkedin.com/in/naif-alghamdi-44903a434/)
- GitHub: [github.com/NAIFDev1](https://github.com/NAIFDev1)

---

## ملخص بالعربية

بورتفوليو **نايف الغامدي** — موقع شخصي ثنائي اللغة (عربي/إنجليزي) بدعم كامل للاتجاه من اليمين لليسار.

**تنبيه مهم بخصوص الرابط المباشر:** الرابط
**[naifdev1.github.io/portfolio](https://naifdev1.github.io/portfolio)**
يعرض حالياً **النسخة القديمة** من البورتفوليو، وليس الكود الموجود في هذا المستودع. الكود هنا
إعادة كتابة كاملة **لم تُنشر بعد**، ويُبنى لـ **Cloudflare Workers** وليس GitHub Pages، لذلك
النسخة القديمة ما زالت تعمل من فرع `gh-pages`. أصل الموقع في بيانات الـSEO مضبوط في
`src/data/site.ts` (`site.url`)، ويحتاج تحديثاً واحداً فقط إذا نُقل الموقع إلى مضيف آخر.

**التقنيات:** TanStack Start (React 19) · TypeScript · Vite 8 · Tailwind CSS v4 · Nitro 3 على
Cloudflare Workers · خطوط مستضافة محلياً (Outfit + IBM Plex Sans Arabic) بدون أي طلبات خارجية.

**الأداء:** توليد مسبق للصفحة (HTML ثابت) · خطوط ذاتية الاستضافة · حذف 121 حزمة غير مستخدمة ·
حركة زخرفية محصورة بالشاشات الكبيرة وتُعطَّل مع `prefers-reduced-motion`.

**المشاريع المعروضة:** Khabir (محلّل سيرة ذاتية)، NOVA و Forge (مشروعا صفحات هبوط تصورية
بعلامات خيالية).

**شكر وتقدير:** بدأ المشروع كقالب من **[Lovable](https://lovable.dev)**، ثم تم تطوير المحتوى
والميزات وتحسين الأداء وإعداد النشر باستخدام **مساعدة مساعد برمجي ذكي**. جميع الكود ملكي
ومراجَع من قبل صاحب المشروع.
