import { test, expect } from "@playwright/test";

test("a gallery with all the images for the selected breed must be shown if the `Gallery` button is clicked", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByText("Akita").click();
  await page.getByText("Gallery").click();

  await expect(
    page.getByRole("heading", { level: 2, name: "Akita" })
  ).toBeVisible();
  await expect(page.getByTestId("gallery")).toBeVisible();
});
