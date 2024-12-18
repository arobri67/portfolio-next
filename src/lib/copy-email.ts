import type { Dispatch, SetStateAction } from "react";

type CopyEmailProps = {
  email: string;
  setIsCopied: Dispatch<SetStateAction<boolean>>;
};

export const copyEmail = async ({ email, setIsCopied }: CopyEmailProps) => {
  try {
    await navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  } catch (err) {
    console.error("Failed to copy email: ", err);
  }
};
