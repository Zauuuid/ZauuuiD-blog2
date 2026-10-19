import { useEffect } from "react";

function upsertMeta(attribute, key, content) {
  if (!content) return;
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function SEO({ title, description, path = "/" }) {
  useEffect(() => {
    const pageTitle = title ? `${title} — زايد` : "زايد — تقنية المعلومات والأمن";
    const canonical = new URL(path, window.location.origin).href;
    document.title = pageTitle;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:type", path.startsWith("/projects/") ? "article" : "website");
    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("name", "twitter:card", "summary");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", description);

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": path.startsWith("/projects/") ? "CreativeWork" : "Person",
      name: title || "Zayed (ZAUUUID)",
      url: canonical,
      description,
    };
    let schema = document.getElementById("structured-data");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "structured-data";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(structuredData).replace(/</g, "\\u003c");
  }, [description, path, title]);
  return null;
}
