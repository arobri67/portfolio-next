import { IconSquareRoundedLetterA, IconSquareRoundedLetterOFilled } from "@tabler/icons-react";
import Link from "next/link";

export const Logo = () => {
  return (
  // <div className="flex items-center space-x-1">
  //   <IconCircleFilled className="size-6 text-primary" />
  //   <Link className="font-sans-josefin text-xl font-semibold" href="/">
  //     arnaudobri
  //     <span className="text-primary">.com</span>
  //   </Link>
  // </div>

    // <Link className="font-sans-josefin text-xl font-bold" href="/">
    //   <IconUniverse stroke={1} className="size-6 text-foreground" />
    // </Link>
    <Link className="inline-flex items-center text-slate-600 dark:text-primary" href="/">
      <IconSquareRoundedLetterA stroke={1.5} className="size-6 " />
      <IconSquareRoundedLetterOFilled stroke={1.5} className="size-6 " />
    </Link>

  );
};
