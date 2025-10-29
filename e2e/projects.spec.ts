import { test, expect } from "@playwright/test";

test.describe("Projects Page", () => {
  test("should load projects page successfully", async ({ page }) => {
    await page.goto("/projects");

    // Check if the page title is visible
    await expect(page.getByText("Featured Projects")).toBeVisible();
  });

  test("should display project cards", async ({ page }) => {
    await page.goto("/projects");

    // Check if project cards are visible
    await expect(page.getByText("Zenilla Media")).toBeVisible();
    await expect(page.getByText("PISL Freight")).toBeVisible();
    await expect(page.getByText("Huntville")).toBeVisible();
  });

  test("should have working project links", async ({ page }) => {
    await page.goto("/projects");

    // Check if project links are working
    const zenillaLink = page.getByRole("link", { name: /live demo/i }).first();
    await expect(zenillaLink).toBeVisible();
    await expect(zenillaLink).toHaveAttribute(
      "href",
      "https://www.zenillamedia.com"
    );
  });

  test("should display project tags", async ({ page }) => {
    await page.goto("/projects");

    // Check if project tags are visible
    await expect(page.getByText("React")).toBeVisible();
    await expect(page.getByText("Next.js")).toBeVisible();
    await expect(page.getByText("TypeScript")).toBeVisible();
  });
});
