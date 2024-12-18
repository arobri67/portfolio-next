import { IconSquareRoundedLetterA, IconSquareRoundedLetterOFilled } from "@tabler/icons-react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link className="inline-flex items-center rounded-lg px-2 py-1 text-slate-600 hover:bg-primary/10 dark:text-primary" href="/">
      <IconSquareRoundedLetterA stroke={1.5} className="size-6 " />
      <IconSquareRoundedLetterOFilled stroke={1.5} className="size-6 " />
    </Link>

  );
};
