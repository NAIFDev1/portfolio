# Notes on this export

## Running the project locally

```sh
npm i        # or: bun install
npm run dev  # starts the site at http://localhost:8080
npm run build
```

Requires Node.js 20+ (or Bun). The app is TanStack Start + React 19 + Tailwind CSS v4.

## Images

`src/assets/` contains two kinds of files:

- `hero-portrait.png` and `khabir-screenshot.png` — the actual image binaries, included here so nothing is lost in the export.
- `*.asset.json` — small pointer files the Lovable asset service uses. The app code imports these and reads their `url` field, which resolves to Lovable's hosted asset storage. That route only exists while the project runs on Lovable, so outside Lovable the two images will not load on their own.

To run the site fully offline, point the imports at the local PNG files instead of the `.asset.json` files:

- `src/sections/Hero.tsx` — replace the `hero-portrait.png.asset.json` import with `import portraitUrl from "@/assets/hero-portrait.png";` and use `portraitUrl` where `portraitAsset.url` is used.
- `src/sections/Work.tsx` — do the same for `khabir-screenshot.png.asset.json`.

## Not included

`node_modules/`, build output, and Lovable workspace/metadata folders are excluded. Run an install to recreate them.
