import { AboutText } from "@/components/about-app/about-text";
import { Toolbox } from "@/components/about-app/toolbox";
import { SectionSeparator } from "@/components/section-separator";

export default function AboutPage() {
  return (
    <section className="py-24 pt-40">
      <div className="container max-w-3xl">
        <div>
          <SectionSeparator title="A look at my journey" />
          <AboutText />
        </div>
        <div>
          <SectionSeparator title="My toolbox" />
          <Toolbox />
        </div>
      </div>
    </section>
  );
};
