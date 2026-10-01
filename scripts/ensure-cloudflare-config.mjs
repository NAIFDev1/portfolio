// Restores the Cloudflare deploy config after a prerendered build.
//
// The @lovable.dev/vite-tanstack-config prerender path installs a preview shim that
// shadows the `cloudflare-module` preset's `compiled` hook, so nitro skips writing
// `.output/server/wrangler.json` (and its `.wrangler/deploy/config.json` pointer)
// for local builds. The Lovable sandbox writes them itself, but a manual
// `wrangler deploy` needs them, so we recreate them here when absent.
//
// Runs via npm's `postbuild` lifecycle. No-op when nitro already wrote the config.
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import { relative, resolve, dirname, join } from "node:path";

const root = process.cwd();
const outputDir = resolve(root, ".output");
const serverDir = join(outputDir, "server");
const publicDir = join(outputDir, "public");
const wranglerPath = join(serverDir, "wrangler.json");

const exists = async (p) => {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
};

if (!(await exists(join(serverDir, "index.mjs")))) {
  // Not a nitro worker build (e.g. `vite build` with nitro disabled) — nothing to do.
  process.exit(0);
}

if (await exists(wranglerPath)) {
  // nitro generated the real config; leave it untouched.
  process.exit(0);
}

let name = "portfolio";
try {
  const pkg = JSON.parse(await readFile(join(root, "package.json"), "utf8"));
  if (typeof pkg.name === "string" && pkg.name) name = pkg.name;
} catch {}

name = name
  .toLowerCase()
  .replace(/[^a-z0-9-]/g, "-")
  .replace(/-$/, "");

const toPosix = (p) => p.split("\\").join("/");

const config = {
  compatibility_date: new Date().toISOString().slice(0, 10),
  main: "index.mjs",
  assets: {
    binding: "ASSETS",
    directory: toPosix(relative(serverDir, publicDir)),
  },
  name,
  compatibility_flags: ["nodejs_compat"],
  no_bundle: true,
  rules: [{ type: "ESModule", globs: ["**/*.mjs", "**/*.js"] }],
};

await writeFile(wranglerPath, JSON.stringify(config, null, 2));

const deployConfigPath = join(root, ".wrangler", "deploy", "config.json");
await mkdir(dirname(deployConfigPath), { recursive: true });
await writeFile(
  deployConfigPath,
  JSON.stringify({ configPath: toPosix(relative(dirname(deployConfigPath), wranglerPath)) }),
);

console.log(`[cloudflare] Wrote ${toPosix(relative(root, wranglerPath))}`);
