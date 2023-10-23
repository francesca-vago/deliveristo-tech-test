import { ZodSchema, z } from "zod";

export const ResponseZ = <T extends ZodSchema<unknown>>(messageSchema: T) =>
  z.object({
    status: z.string(),
    message: messageSchema,
  });
