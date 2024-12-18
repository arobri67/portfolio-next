"use client";

import { CheckIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { copyEmail } from "@/lib/copy-email";

export const CopyEmail = ({ email }: { email: string }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    copyEmail({ email, setIsCopied });
  };

  return (

    <Button
      size="sm"
      variant="outline"
      onClick={handleCopyEmail}
      className="relative overflow-hidden rounded-lg border-primary bg-transparent text-sm font-normal text-foreground/70 transition-all duration-300 ease-in-out hover:text-foreground"
    >
      <span
        className={`flex items-center transition-all duration-200 ${isCopied ? "opacity-0" : "opacity-100"}`}
      >
        Copy my email
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
          isCopied
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        <CheckIcon className="mr-2 size-4 text-destructive" />
        Copied!
      </span>
    </Button>

  );
};
