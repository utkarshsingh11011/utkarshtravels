import { MetadataRoute } from "next";
import { getAllRoutes } from "@/lib/data";
import siteConfig from "@/data/site.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getAllRoutes();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: siteConfig.domain,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteConfig.domain}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const programmaticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.domain}/${route.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticEntries, ...programmaticEntries];
}
