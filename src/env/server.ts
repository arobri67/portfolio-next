import type { ZodError } from "zod";

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),

  },
  // Called when the schema validation fails.
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors,
    );
    process.exit(1);
  },

  // eslint-disable-next-line node/no-process-env
  experimental__runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
