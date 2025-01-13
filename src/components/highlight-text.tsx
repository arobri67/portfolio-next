import React from "react";

export const HighlightText = ({ children }: { children: React.ReactNode }) => {
  return (
    <span>
      {" "}
      <span className="underline-gradient">
        {children}
      </span>
      {" "}
    </span>
  );
};
