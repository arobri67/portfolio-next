import type { MetadataRoute } from "next/types";

import { env } from "@/env/client";
import { getProjects } from "@/lib/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();

  return [

    {
      url: env.NEXT_PUBLIC_BASE_URL,
      lastModified: "2025-01-14",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: "2025-01-14",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: "2025-01-14",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${env.NEXT_PUBLIC_BASE_URL}/projects`,
      lastModified: "2025-01-14",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...projects.map(project => ({
      url: `${env.NEXT_PUBLIC_BASE_URL}/projects/${project.slug}`,
      lastModified: project.publishedAt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
