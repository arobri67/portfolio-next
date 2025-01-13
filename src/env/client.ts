/* eslint-disable node/no-process-env */
import type { ZodError } from "zod";

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url(),
    NEXT_PUBLIC_IMG_ME: z.string().url(),
    NEXT_PUBLIC_CV_URL: z.string().url(),
    NEXT_PUBLIC_EMAIL: z.string().email(),
    NEXT_PUBLIC_GITHUB_URL: z.string().url(),
    NEXT_PUBLIC_LINKEDIN_URL: z.string().url(),
    NEXT_PUBLIC_TWITTER_URL: z.string().url(),
    NEXT_PUBLIC_SCHOLAR_URL: z.string().url(),
  },
  // Called when the schema validation fails.
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors,
    );
    process.exit(1);
  },

  experimental__runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_IMG_ME: process.env.NEXT_PUBLIC_IMG_ME,
    NEXT_PUBLIC_CV_URL: process.env.NEXT_PUBLIC_CV_URL,
    NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL,
    NEXT_PUBLIC_GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
    NEXT_PUBLIC_LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    NEXT_PUBLIC_TWITTER_URL: process.env.NEXT_PUBLIC_TWITTER_URL,
    NEXT_PUBLIC_SCHOLAR_URL: process.env.NEXT_PUBLIC_SCHOLAR_URL,
  },
  emptyStringAsUndefined: true,
});
