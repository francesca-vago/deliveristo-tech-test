import { BreedList } from "./BreedList";
import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("BreedList", () => {
  test("renders component", () => {
    render(
      <BreedList
        selectedBreed={null}
        onSelectBreed={() => void 0}
        breeds={[
          {
            breed: "Test Breed",
            subBreeds: ["Test Sub Breed"],
          },
        ]}
      />
    );

    expect(screen.getByRole("button", { name: "Test Breed" })).toBeVisible();
  });

  test("should not show subBreeds by default", () => {
    render(
      <BreedList
        selectedBreed={null}
        onSelectBreed={() => void 0}
        breeds={[
          {
            breed: "Test Breed",
            subBreeds: ["Test Sub Breed"],
          },
        ]}
      />
    );

    expect(screen.getByRole("button", { name: "Test Breed" })).toBeVisible();
    expect(
      screen.queryByRole("button", { name: "Test Sub Breed" })
    ).not.toBeInTheDocument();
  });

  test("should show subBreeds if open button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <BreedList
        selectedBreed={null}
        onSelectBreed={() => void 0}
        breeds={[
          {
            breed: "Test Breed",
            subBreeds: ["Test Sub Breed"],
          },
        ]}
      />
    );

    const openButton = screen.getByRole("button", { name: "Open" });

    await user.click(openButton);

    expect(
      screen.getByRole("button", { name: "Test Sub Breed" })
    ).toBeVisible();
  });

  test("should hide subBreeds if close button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <BreedList
        selectedBreed={null}
        onSelectBreed={() => void 0}
        breeds={[
          {
            breed: "Test Breed",
            subBreeds: ["Test Sub Breed"],
          },
        ]}
      />
    );

    const openButton = screen.getByRole("button", { name: "Open" });

    await user.click(openButton);

    const closeButton = screen.getByRole("button", { name: "Close" });

    await user.click(closeButton);

    expect(
      screen.queryByRole("button", { name: "Test Sub Breed" })
    ).not.toBeInTheDocument();
  });

  test("should call callback if a breed is clicked", async () => {
    const user = userEvent.setup();

    const onSelectBreed = vi.fn();

    render(
      <BreedList
        selectedBreed={null}
        onSelectBreed={onSelectBreed}
        breeds={[
          {
            breed: "Test Breed",
            subBreeds: ["Test Sub Breed"],
          },
        ]}
      />
    );

    const breedButton = screen.getByRole("button", { name: "Test Breed" });

    await user.click(breedButton);

    expect(onSelectBreed).toHaveBeenCalledWith("Test Breed");
  });
});
