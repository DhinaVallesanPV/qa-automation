import { Page, Locator } from '@playwright/test';

export class DreamTotalPage {
    readonly page: Page;
    readonly dreamsTable: Locator;
    readonly recurringDreamsList: Locator;

    constructor(page: Page) {
        this.page = page;
        // Main stats table
        this.dreamsTable = page.locator('#dreamsTotal');
        // Recurring dreams list (assuming it exists elsewhere in the page)
        this.recurringDreamsList = page.locator('.recurring-dreams li, ul.recurring-list li');
    }

    async getDreamStat(statName: string): Promise<string> {
        const row = this.dreamsTable.locator(`tbody tr:has-text("${statName}")`);
        return row.locator('td:nth-child(2)').textContent();
    }
}