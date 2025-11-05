import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load the homepage successfully", async ({ page }) => {
    await page.goto("/");

    // Check if the main heading is visible
    await expect(page.getByText(/hi, i'm/i)).toBeVisible();
    await expect(page.getByText("Adesholly")).toBeVisible();
  });

  test("should have working navigation", async ({ page }) => {
    await page.goto("/");

    // Test desktop navigation (side rail)
    const aboutLink = page.getByRole("link", { name: "About" });
    await expect(aboutLink).toBeVisible();

    await aboutLink.click();
    await expect(page).toHaveURL("/about");
  });

  test("should have working mobile navigation", async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Open mobile menu
    const menuButton = page.getByRole("button", { name: /menu/i });
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    // Check if mobile menu items are visible
    await expect(page.getByRole("link", { name: "About" })).toBeVisible();
  });

  test("should have working theme toggle", async ({ page }) => {
    await page.goto("/");

    const themeToggle = page.getByRole("button", { name: /toggle theme/i });
    await expect(themeToggle).toBeVisible();

    await themeToggle.click();
    // Theme should change (we can't easily test the actual theme change without more setup)
  });

  test("should have working social links", async ({ page }) => {
    await page.goto("/");

    const githubLink = page.getByRole("link", { name: "GitHub" });
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/adesholly"
    );
  });

  test("should have proper SEO meta tags", async ({ page }) => {
    await page.goto("/");

    // Check title
    await expect(page).toHaveTitle(/Adesholly/);

    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute(
      "content",
      /full-stack developer/
    );
  });
});
