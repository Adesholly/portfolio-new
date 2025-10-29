import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://adesholly.vercel.app/";
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified },
    { url: `${base}/about`, lastModified },
    { url: `${base}/experience`, lastModified },
    { url: `${base}/projects`, lastModified },
    { url: `${base}/contact`, lastModified },
  ];
}
