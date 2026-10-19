import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const baseHtml = readFileSync(path.join(dist, "index.html"), "utf8");
const projectsPath = path.join(root, "src", "content", "projects");
const configuredSite = JSON.parse(readFileSync(path.join(root, "src", "content", "site.json"), "utf8"));
const siteUrl = (process.env.VITE_SITE_URL || process.env.SITE_URL || configuredSite.siteUrl || "").replace(/\/$/, "");
const projects = readdirSync(projectsPath)
  .filter((file) => file.endsWith(".json"))
  .map((file) => JSON.parse(readFileSync(path.join(projectsPath, file), "utf8")))
  .filter((project) => project.visibility === "public");

function escapeHtml(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function replaceMeta(html, key, content, attribute = "property") {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp('<meta\\s+' + attribute + '="' + escaped + '"\\s+content="[^"]*"\\s*/?>');
  const tag = '<meta ' + attribute + '="' + key + '" content="' + escapeHtml(content) + '" />';
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", "    " + tag + "\n  </head>");
}

for (const project of projects) {
  const routePath = "/projects/" + project.slug;
  const title = project.title + " — ZAUUUID";
  const description = project.summary + " " + project.technologies.join(" · ") + ".";
  const canonical = siteUrl ? new URL(routePath, siteUrl + "/").href : "";
  let html = baseHtml.replace(/<title>[^<]*<\/title>/, "<title>" + escapeHtml(title) + "</title>");
  html = replaceMeta(html, "description", description, "name");
  html = replaceMeta(html, "og:type", "article");
  html = replaceMeta(html, "og:title", title);
  html = replaceMeta(html, "og:description", description);
  html = replaceMeta(html, "og:url", canonical);
  html = replaceMeta(html, "twitter:title", title, "name");
  html = replaceMeta(html, "twitter:description", description, "name");

  const canonicalPattern = /<link rel="canonical" href="[^"]*"\s*\/>/;
  if (canonical) {
    const canonicalTag = '<link rel="canonical" href="' + escapeHtml(canonical) + '" />';
    html = canonicalPattern.test(html)
      ? html.replace(canonicalPattern, canonicalTag)
      : html.replace("</head>", "    " + canonicalTag + "\n  </head>");
  } else {
    html = html.replace(canonicalPattern, "");
  }
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description,
    ...(canonical ? { url: canonical } : {}),
  };
  const schemaTag = '<script id="structured-data" type="application/ld+json">' +
    JSON.stringify(schema).replace(/</g, "\\u003c") + "</script>";
  html = html.replace(/<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/, schemaTag);

  const route = path.join(dist, "projects", project.slug);
  mkdirSync(route, { recursive: true });
  writeFileSync(path.join(route, "index.html"), html);
}

if (siteUrl) {
  const urls = [new URL("/", siteUrl + "/").href, ...projects.map((project) => new URL("/projects/" + project.slug, siteUrl + "/").href)];
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((url) => "  <url><loc>" + escapeHtml(url) + "</loc></url>").join("\n") + "\n</urlset>\n";
  writeFileSync(path.join(dist, "sitemap.xml"), xml);
  writeFileSync(path.join(dist, "robots.txt"), "User-agent: *\nAllow: /\nSitemap: " + siteUrl + "/sitemap.xml\n");
} else {
  console.info("Site URL is unset; route metadata was generated without absolute canonicals or a sitemap.");
}
