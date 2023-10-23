import { ZodSchema, z } from "zod";

export const fetchDecode = async <T extends ZodSchema<unknown>>(
  url: string,
  decoder: T
): Promise<z.infer<T>> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw Error();
  }
  const res = await response.json();
  return decoder.parse(res);
};
