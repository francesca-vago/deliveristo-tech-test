import { z } from "zod";

export const ResponseZ = z.object({
  status: z.string(),
  message: z.string(),
});

export type ResponseT = z.infer<typeof ResponseZ>;
