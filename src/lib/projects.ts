import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";

const rootDirectory = path.join(process.cwd(), "src", "content", "projects");

export type Project = {
  metadata: ProjectMetadata;
  content: string;
};

export type ProjectMetadata = {
  title?: string;
  summary?: string;
  image?: string;
  github?: string;
  production?: string;
  author?: string;
  publishedAt?: string;
  technologies?: string[];
  published?: boolean;
  slug: string;
};

export const getProjectBySlug = async (
  slug: string,
): Promise<Project | null> => {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
    const { data, content } = matter(fileContent);
    return { metadata: { ...data, slug }, content };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
};

export const getProjectMetadata = (filepath: string): ProjectMetadata => {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const { data } = matter(fileContent);
  return { ...data, slug };
};

export const getProjects = async (
  limit?: number,
): Promise<ProjectMetadata[]> => {
  const files = fs.readdirSync(rootDirectory);

  const projects = files
    .map(file => getProjectMetadata(file))
    .filter(project => project.published === true)
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? "") < new Date(b.publishedAt ?? "")) {
        return 1;
      } else {
        return -1;
      }
    });

  if (limit) {
    return projects.slice(0, limit);
  }

  return projects;
};
