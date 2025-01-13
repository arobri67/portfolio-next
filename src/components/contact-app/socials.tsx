import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

import { env } from "@/env/client";

type SocialLink = {
  name: string;
  icon: React.ReactNode;
  path: string;
};
const SOCIALS: SocialLink[] = [
  {
    name: "Github",
    icon: <IconBrandGithub className="size-7" stroke={1.5} />,
    path: env.NEXT_PUBLIC_GITHUB_URL,
  },
  {
    name: "X (Twitter)",
    icon: <IconBrandX className="size-7" stroke={1.5} />,
    path: env.NEXT_PUBLIC_TWITTER_URL,
  },
  {
    name: "LinkedIn",
    icon: <IconBrandLinkedin className="size-7" stroke={1.5} />,
    path: env.NEXT_PUBLIC_LINKEDIN_URL,
  },
];
export const Socials = () => {
  return (
    <div className="flex space-x-4">
      {SOCIALS.map(social => (
        <a
          key={social.name}
          href={social.path}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-full text-foreground/70 transition-all duration-300 ease-in-out hover:text-foreground"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
