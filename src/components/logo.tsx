import { IconUniverse } from "@tabler/icons-react";
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

    <Link className="font-sans-josefin text-xl font-bold" href="/">
      <IconUniverse stroke={1} className="size-6 text-foreground" />
    </Link>

  );
};
