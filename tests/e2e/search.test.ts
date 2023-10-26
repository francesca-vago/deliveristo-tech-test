import { test, expect } from "@playwright/test";

test("when typing in the searchbox, the breeds list must be filtered", async ({
  page,
}) => {
  await page.goto("/");

  const akitaLocator = page.getByRole("button", { name: "Akita" });
  const shibaLocator = page.getByRole("button", { name: "Shiba" });

  await expect(akitaLocator).toBeVisible();
  await expect(shibaLocator).toBeVisible();

  await page.getByRole("searchbox").fill("Akita");

  await expect(shibaLocator).not.toBeVisible();
  await expect(akitaLocator).toBeVisible();
});

test("when clicking on a breed, the corresponding page must open", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Akita" }).click();

  await expect(
    page.getByRole("heading", { level: 2, name: "Akita" })
  ).toBeVisible();
});

test("when clicking on a sub breed, the corresponding page must open", async ({
  page,
}) => {
  await page.goto("/");

  await page
    .locator("li")
    .filter({ hasText: "Bulldog" })
    .getByLabel("Open")
    .click();
  await page.getByRole("button", { name: "French" }).click();

  await expect(
    page.getByRole("heading", { level: 2, name: "French Bulldog" })
  ).toBeVisible();
});
