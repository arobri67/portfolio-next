import { IconDownload } from "@tabler/icons-react";
import Image from "next/image";

import { env } from "@/env/client";

import { Button } from "../ui";

export const Intro = () => {
  const imgMe
    = env.NEXT_PUBLIC_IMG_ME;

  return (
    <section className="flex flex-col-reverse items-center gap-x-10 gap-y-4 pb-12 md:flex-row">
      <div className="mt-2 flex-1 md:mt-0">
        <h1 className="title title-gradient font-bold">
          Hi, I&apos;m
          Arnaud Obri.
        </h1>
        <p className="mb-4 mt-2 font-light text-muted-foreground">
          From lab 🔬 to code 💻 - I&apos;ve transitioned from scientific
          research to software development. This enables me to craft robust
          solutions with research-driven methodology.
        </p>
        <a href={env.NEXT_PUBLIC_CV_URL} target="_blank" rel="noopener noreferrer">
          <Button size="sm" variant="outline" className="uppercase">
            <IconDownload className="size-4" />
            <span className="text-xs font-semibold ">Download CV</span>
          </Button>
        </a>
      </div>
      <div className="relative overflow-hidden rounded-3xl mix-blend-multiply dark:mix-blend-normal">
        <Image
          className="flex-1 rounded-lg sepia-0"
          src={imgMe}
          alt="Arnaud Obri image"
          width={180}
          height={250}
          priority
        />
      </div>
    </section>
  );
};
