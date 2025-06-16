import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test('Home Page Verification', async ({ page, context }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  
  // Verify loading animation
  await expect(homePage.loadingAnimation).toBeVisible();
  await homePage.waitForContent();
  
  // Verify main content
  await expect(homePage.mainContent).toBeVisible();
  await expect(homePage.myDreamsButton).toBeVisible();

  // Handle new tabs
  const [diaryPage] = await Promise.all([
    context.waitForEvent('page'),
    homePage.myDreamsButton.click()
  ]);

  await expect(diaryPage).toHaveURL(/dreams-diary.html$/);
});