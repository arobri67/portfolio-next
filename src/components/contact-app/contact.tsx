import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconMail } from "@tabler/icons-react";
import React from "react";

type SocialLink = {
  name: string;
  icon: React.ElementType;
  path: string;
};
const SOCIALS: SocialLink[] = [
  {
    name: "Github",
    icon: IconBrandGithub,
    path: "https://github.com/arobri67",
  },
  {
    name: "X (Twitter)",
    icon: IconBrandX,
    path: "https://x.com/irboa67",
  },
  {
    name: "LinkedIn",
    icon: IconBrandLinkedin,
    path: "https://www.linkedin.com/in/aobri/",
  },
];

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
            <div className="flex justify-start space-x-2">
              {SOCIALS.map(social => (
                <a
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon
                    aria-hidden="true"
                    className="size-7 rounded-full p-1 transition-colors hover:scale-110 hover:border hover:border-primary/20 hover:bg-primary hover:text-background"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
