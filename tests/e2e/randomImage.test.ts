import { test, expect } from "@playwright/test";

test("a random image must be shown when a breed is selected", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByText("Akita").click();

  await expect(
    page.getByRole("heading", { level: 2, name: "Akita" })
  ).toBeVisible();
  await expect(page.getByAltText("Akita image")).toBeVisible();
});

test("a new random image must be shown if the `get another image` button is clicked", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByText("Akita").click();

  await expect(
    page.getByRole("heading", { level: 2, name: "Akita" })
  ).toBeVisible();

  const imageLocator = page.getByAltText("Akita image");

  const imageSrc = await imageLocator.getAttribute("src");

  // It could happens that the same image is returned, so we retry
  const attempts = 50;

  const newImageButtonLocator = page.getByRole("button", {
    name: "Get another image!",
  });

  for (let i = 0; i < attempts; i++) {
    await newImageButtonLocator.click();

    const newImageSrc = await imageLocator.getAttribute("src");

    if (imageSrc !== newImageSrc) {
      expect(imageSrc).not.toBe(newImageSrc);
      return;
    }
  }

  throw new Error(`The image is always the same after ${attempts} attempts`);
});
