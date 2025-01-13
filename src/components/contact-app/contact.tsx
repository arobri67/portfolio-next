import { IconMail } from "@tabler/icons-react";
import React from "react";

import { env } from "@/env/client";

import { CopyEmail } from "./button-copy-email";
import { Socials } from "./socials";

export const Contact = () => {
  return (
    <section>
      <div className="rounded-lg border bg-muted/10 p-10">
        <div className="flex flex-col items-start justify-between md:flex-row md:items-center md:space-x-6">
          <div className="mb-2 flex flex-row items-center gap-2 ">
            <IconMail className="size-8 text-foreground/70" />
            <h2 className="title text-foreground/70">Contact</h2>
          </div>
          <div>
            <p className="mb-2 font-light text-muted-foreground">
              I'm always open to new opportunities and collaborations. Feel free to
              reach out to me via email or through my social media platforms.
            </p>
            <div className="flex flex-row items-center gap-4">
              <Socials />
              <CopyEmail email={env.NEXT_PUBLIC_EMAIL} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
