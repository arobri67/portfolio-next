import type { Metadata } from "next";

import { IconHome } from "@tabler/icons-react";
import Image from "next/image";

import { Button } from "@/components/ui";
import { env } from "@/env/client";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

const imgMe = env.NEXT_PUBLIC_IMG_404;

export default function NotFound() {
  return (
    <section className="bg-background py-24">
      <div className="container max-w-3xl">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Image src={imgMe} alt="Arnaud Obri image" width={300} height={400} className="rounded-full" />
          <h2 className="title title-gradient text-7xl font-bold">404</h2>
          <p className="mb-4 mt-2 font-light text-muted-foreground">
            Great! You found a page that doesn't exist.
          </p>
          <Button size="sm" variant="outline" className="uppercase">
            <IconHome className="size-4" />
            <span className="text-xs font-semibold ">FIX THIS PAGE</span>
          </Button>
        </div>
      </div>
    </section>

  );
}
