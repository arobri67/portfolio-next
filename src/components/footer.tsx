import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

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

export const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container max-w-3xl">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
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
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-muted-foreground">
              &copy;
              {" "}
              {new Date().getFullYear()}
              {" "}
              arnaudobri
              <span className="text-primary">.com</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
