import { IconArrowLeft, IconBrandGithub, IconLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import MDXContent from "@/components/mdx-content";
import { Badge } from "@/components/ui";
import { getProjectBySlug, getProjects } from "@/lib/projects";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const projects = await getProjects();
  const slugs = projects.map(project => ({ slug: project.slug }));

  return slugs;
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;
  const { title, image, author, publishedAt, production, github, technologies } = metadata;

  return (
    <section className="pb-24 pt-32">
      <div className="container max-w-3xl">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-primary"
        >
          <IconArrowLeft className="size-5" />
          <span>Back to projects</span>
        </Link>

        {image && (
          <div className="relative mb-6 flex w-full items-center justify-center rounded-lg">
            <Image
              src={`https://utfs.io/a/uo6z56scs7/${image}`}
              alt={title || ""}
              className="rounded-lg object-contain"
              width={550}
              height={400}
            />
          </div>
        )}
        <div>
          <div className="flex items-center justify-between">
            <h1 className="title">{title}</h1>
            <div className="flex items-center space-x-2">
              {production && (
                <Link href={production} target="_blank" rel="noreferrer noopener">
                  <IconLink className="size-7 rounded-full p-1 transition-colors hover:scale-110 hover:border hover:border-primary/20 hover:bg-primary hover:text-background" />
                </Link>
              )}
              {github && (
                <Link href={github} target="_blank" rel="noreferrer noopener">
                  <IconBrandGithub className="size-7 rounded-full p-1 transition-colors hover:scale-110 hover:border hover:border-primary/20 hover:bg-primary hover:text-background" />
                </Link>
              )}
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            {author}
            {" "}
            |
            {" "}
            {formatDate(publishedAt ?? "")}
          </p>
        </div>
        {technologies && (
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map(tech => (
              <Badge
                key={tech}
                className="pointer-events-none p-1 text-sm font-medium text-background shadow-none"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
        <main className="prose mt-16 dark:prose-invert">
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  );
}
