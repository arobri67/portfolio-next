import { IconSquareRoundedLetterA, IconSquareRoundedLetterOFilled } from "@tabler/icons-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export const Logo = ({ size = 6 }: { size?: number }) => {
  return (
    <Link className="inline-flex items-center rounded-lg px-2 py-1 hover:bg-primary/10 dark:text-primary" href="/">
      <IconSquareRoundedLetterA stroke={1.5} className={cn(`size-${size}`, " text-slate-600")} />
      <IconSquareRoundedLetterOFilled stroke={1.5} className={cn(`size-${size}`, " text-slate-600")} />
    </Link>

  );
};
