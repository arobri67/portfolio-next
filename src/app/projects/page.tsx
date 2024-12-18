import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

import { ProjectList } from "@/components/projects-app/project-list";
import { SectionSeparator } from "@/components/section-separator";
import { getProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <SectionSeparator title="Projects" />
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-primary"
        >
          <IconArrowLeft className="size-5" />
          <span>Back to homepage</span>
        </Link>
        <ProjectList projects={projects} />
      </div>
    </section>
  );
};
