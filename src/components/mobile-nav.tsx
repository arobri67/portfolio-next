import { IconMenuDeep } from "@tabler/icons-react";
import Link from "next/link";

import { Logo } from "./logo";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui";

type LinkType = {
  label: string;
  href: string;
};

export const MobileNav = ({ links }: { links: LinkType[] }) => {
  return (
    <div className="flex items-center md:hidden">
      <Sheet>
        <SheetTrigger>
          <IconMenuDeep className="size-6 text-foreground" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetDescription />
          {/* logo */}
          <SheetTitle asChild>
            <div className="mb-20 mt-32 flex justify-center text-xl">
              <Link href="/">
                <Logo />
              </Link>
            </div>
          </SheetTitle>
          {/* nav */}
          <ul className="space-y-6 text-center text-xl">
            {links.map(link => (
              <li key={link.href}>
                <Link className="capitalize" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};
