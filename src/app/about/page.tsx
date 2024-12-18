import { AboutText } from "@/components/about-app/about-text";
import { SectionSeparator } from "@/components/section-separator";

export default function AboutPage() {
  return (
    <section className="py-24 pt-40">
      <div className="container max-w-3xl">
        <SectionSeparator title="A look at my journey" />
        <AboutText />
      </div>
    </section>
  );
};
