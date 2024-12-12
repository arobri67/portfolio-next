import Link from "next/link";

import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

const LINKS = [
  {
    label: "about",
    href: "/about",
  },
  {
    label: "projects",
    href: "/projects",
  },
  {
    label: "contact",
    href: "/contact",
  },
];

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="container flex max-w-3xl items-center justify-between">
        <div>logo</div>
        <ul className="hidden items-center gap-6 text-sm font-light text-muted-foreground md:flex">
          {LINKS.map(link => (
            <li
              className="capitalize transition-colors hover:text-foreground"
              key={link.href}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <ThemeToggle />
          <MobileNav links={LINKS} />
        </div>
      </nav>
    </header>
  );
};
