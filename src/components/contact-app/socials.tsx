import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

type SocialLink = {
  name: string;
  icon: React.ReactNode;
  path: string;
};
const SOCIALS: SocialLink[] = [
  {
    name: "Github",
    icon: <IconBrandGithub className="size-7" stroke={1.5} />,
    path: "https://github.com/arobri67",
  },
  {
    name: "X (Twitter)",
    icon: <IconBrandX className="size-7" stroke={1.5} />,
    path: "https://x.com/irboa67",
  },
  {
    name: "LinkedIn",
    icon: <IconBrandLinkedin className="size-7" stroke={1.5} />,
    path: "https://www.linkedin.com/in/aobri/",
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
