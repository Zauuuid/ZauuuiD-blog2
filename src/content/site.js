import siteConfig from "./site.json";

// Add only reviewed, public demo origins here. An empty set keeps embeds disabled.
export const siteUrl = siteConfig.siteUrl;
export const demoOrigins = new Set([]);
