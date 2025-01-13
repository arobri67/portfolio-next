import React from "react";

export const HighlightedLetter = ({ letter }: { letter: string }) => {
  return (
    <span className="float-left mr-1 rounded bg-gradient-to-r from-primary to-secondary px-3 py-2 text-2xl font-bold text-foreground">
      {letter}
    </span>
  );
};
