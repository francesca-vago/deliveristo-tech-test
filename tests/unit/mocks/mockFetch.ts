import { vi, Mock } from "vitest";

type Fetch = typeof global.fetch;

export const mockFetch: Mock<
  Parameters<Fetch>,
  ReturnType<Fetch>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
> = (global.fetch = vi.fn() as any);

export function createSuccessResponse(data: unknown) {
  return {
    json: () => Promise.resolve(data),
    ok: true,
  } as Response;
}

export function createFailedResponse(data: unknown) {
  return {
    json: () => Promise.resolve(data),
    ok: false,
  } as Response;
}
