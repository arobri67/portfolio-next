import Image from "next/image";

import { env } from "@/env/client";

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
          I'm Arnaud, a Software Engineer and Scientist leveraging rigorous analytical thinking to build robust, full-stack solutions. I am comfortable across the technology spectrum and always excited to master new tools to decode complex challenges.
        </p>
        {/* <a href="https://www.linkedin.com/in/aobri/" target="_blank" rel="noopener noreferrer">
          <Button size="sm" variant="outline" className="uppercase">
            <IconDownload className="size-4" />
            <span className="text-xs font-semibold ">View my CV</span>
          </Button>
        </a> */}
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
