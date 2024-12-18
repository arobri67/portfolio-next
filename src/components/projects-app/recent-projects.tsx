import Link from "next/link";

import { getProjects } from "@/lib/projects";

import { ProjectList } from "../project-list";
import { Separator } from "../ui";

export const RecentProjects = async () => {
  const projects = await getProjects(4);

  return (
    <section className="pb-24">
      <div>
        <div className="mb-10 flex flex-row items-center gap-4">
          <h2 className="title whitespace-nowrap text-foreground/70">Recent Projects</h2>
          <Separator decorative className="hidden md:block md:flex-1" />
        </div>
        <div>
          <ProjectList projects={projects} />
          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground"
          >
            <span>All projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
