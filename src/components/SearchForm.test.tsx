import { SearchForm } from "./SearchForm";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

test("renders component", () => {
  render(<SearchForm />);

  expect(screen.getByRole("searchbox")).toBeDefined();
});
