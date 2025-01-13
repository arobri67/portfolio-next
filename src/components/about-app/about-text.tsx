import { env } from "@/env/client";

import { HighlightText } from "../highlight-text";
import { HighlightedLetter } from "../highlighted-letter";

export const AboutText = () => {
  return (
    <article className="mb-10 space-y-6">
      <p className="about-text">
        <HighlightedLetter letter="H" />
        ello! I am Arnaud Obri. For the last
        <HighlightText>10 years,</HighlightText>
        I have dedicated my time to
        <HighlightText>research in life sciences,</HighlightText>
        which has led me to acquire multiple skills such as
        <HighlightText>
          data analysis, problem-solving, and adaptability
        </HighlightText>
        to new technologies. I&apos;m proud to have contributed to over
        <a href={env.NEXT_PUBLIC_SCHOLAR_URL}><HighlightText>20 publications</HighlightText></a>
        in the scientific community and to have worked with brilliant minds in
        different institutions.
      </p>
      <p className="about-text">
        I&apos;m
        <HighlightText>
          transitioning my career into software development.
        </HighlightText>
        Back in the 2000s, when I was a student, I started learning HTML, CSS.
        Today, I&apos;m rekindling that passion, constantly

        <HighlightText>learning and growing</HighlightText>

        in this
        dynamic digital world.
      </p>
      <p className="about-text">
        I live in

        <HighlightText>Barcelona</HighlightText>
        , with my
        family, but I was born and raised in

        <HighlightText>Strasbourg,</HighlightText>
        France, where I
        spent most of my time. I&apos;ve also had the experience of living in

        <HighlightText>New York,</HighlightText>
        adding to my
        international perspective.
      </p>
    </article>
  );
};
