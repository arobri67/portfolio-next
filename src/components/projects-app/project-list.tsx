import Image from "next/image";
import Link from "next/link";

import type { ProjectMetadata } from "@/lib/projects";

import { formatDate } from "@/lib/utils";

export const ProjectList = ({ projects }: { projects: ProjectMetadata[] }) => {
  return (

    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {projects.map(project => (
        <li key={project.slug} className="group relative">
          <Link href={`/projects/${project.slug}`}>
            {project.image && (
              <div className="h-72 w-full overflow-hidden rounded-lg bg-muted sm:h-60">
                <Image
                  src={`https://utfs.io/a/uo6z56scs7/${project.image}`}
                  alt={project.title || ""}
                  fill
                  className="rounded-lg object-cover object-center"
                />
              </div>
            )}

            <div className="absolute inset-0 rounded-lg bg-slate-600/80 opacity-10 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <h2 className="title line-clamp-1 text-2xl text-slate-100">
                {project.title}
              </h2>
              <p className="line-clamp-1 text-base text-slate-200">
                {project.summary}
              </p>
              <p className="text-xs font-light  text-slate-200">
                {formatDate(project.publishedAt ?? "")}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
