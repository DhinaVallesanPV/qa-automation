import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly loadingAnimation: Locator;
  readonly mainContent: Locator;
  readonly myDreamsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loadingAnimation = page.locator('#loadingAnimation');
    this.mainContent = page.locator('#mainContent');
    this.myDreamsButton = page.locator('#dreamButton');
  }

  async navigate() {
    await this.page.goto('https://arjitnigam.github.io/myDreams/');
  }

  async waitForContent() {
    await this.loadingAnimation.waitFor({ state: 'hidden' });
    await this.mainContent.waitFor({ state: 'visible' });
    await this.myDreamsButton.waitFor({ state: 'visible' });
  }
}