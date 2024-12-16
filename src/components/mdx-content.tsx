import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import type { JSX } from "react";

import { MDXRemote } from "next-mdx-remote/rsc";

const MDXContent = (props: JSX.IntrinsicAttributes & MDXRemoteProps) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...(props.components || {}) }}
    />
  );
};

export default MDXContent;
