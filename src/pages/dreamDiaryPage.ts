import { Page, Locator } from '@playwright/test';

export class DreamDiaryPage {
  readonly page: Page;
  readonly dreamRows: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.dreamRows = page.locator('#dreamsDiary tbody tr');
  }

  async getDreamData() {
    return this.dreamRows.evaluateAll(rows => 
      rows.map(row => {
        const cells = row.querySelectorAll('td');
        return {
          name: cells[0]?.textContent?.trim(),
          daysAgo: cells[1]?.textContent?.trim(),
          type: cells[2]?.textContent?.trim()
        };
      })
    );
  }
}