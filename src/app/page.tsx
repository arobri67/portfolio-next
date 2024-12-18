import { Contact } from "@/components/contact-app/contact";
import { Intro } from "@/components/hero-app/hero";
import { RecentProjects } from "@/components/projects-app/recent-projects";

export default function Home() {
  return (
    <section className="bg-background py-24">
      <div className="container max-w-3xl">
        <Intro />
        <RecentProjects />
        <Contact />
      </div>
    </section>
  );
}
