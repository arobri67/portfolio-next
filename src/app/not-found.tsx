import type { Metadata } from "next";

import { IconAlertTriangle } from "@tabler/icons-react";
import Link from "next/link";

import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <section className="bg-background py-24">
      <div className="container max-w-3xl">
        <div className="flex flex-col items-center space-y-10">
          <h2 className="title title-gradient text-7xl font-bold">404</h2>
          <p className="mb-4 mt-2 font-light text-muted-foreground">
            Great! You found a page that doesn't exist.
          </p>
          <Link href="/">
            <Button size="sm" variant="outline" className="uppercase">
              <IconAlertTriangle className="size-4" />
              <span className="text-xs font-semibold ">FIX THIS PAGE</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
