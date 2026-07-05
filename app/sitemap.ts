import type { MetadataRoute } from "next";

const BASE_URL = "https://amirtrau.co.il";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "monthly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.6 },
    { path: "/services", changeFrequency: "monthly", priority: 0.8 },
    { path: "/portfolio", changeFrequency: "weekly", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.2 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.2 },
  ];

  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
