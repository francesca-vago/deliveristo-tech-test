import { SearchForm } from "./SearchForm";
import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("SearchForm", () => {
  test("should render component", () => {
    render(<SearchForm />);

    expect(screen.getByRole("searchbox")).toBeDefined();
  });

  test("should call the callback on change", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<SearchForm onSearchChange={onChange} />);

    const search = screen.getByRole("searchbox");

    await user.type(search, "shiba");

    expect(onChange).toHaveBeenCalledWith("shiba");
  });

  test("should call the callback on submit", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(<SearchForm onFormSubmit={onSubmit} />);

    const search = screen.getByRole("searchbox");

    await user.type(search, "shiba");
    await user.keyboard("{Enter}");

    expect(onSubmit).toHaveBeenCalledWith("shiba");
  });
});
