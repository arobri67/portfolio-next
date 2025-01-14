import type { Metadata } from "next";

import { AboutText } from "@/components/about-app/about-text";
import { BeyondCode } from "@/components/about-app/beyond-code";
import { Toolbox } from "@/components/about-app/toolbox";
import { SectionSeparator } from "@/components/section-separator";

export const metadata: Metadata = {
  title: "About me",
};

export default function AboutPage() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-3xl">
        <div>
          <SectionSeparator title="A look at my journey" />
          <AboutText />
        </div>
        <div>
          <SectionSeparator title="My toolbox" />
          <Toolbox />
        </div>
        <div>
          <SectionSeparator title="Beyond code" />
          <BeyondCode />
        </div>
      </div>
    </section>
  );
};
