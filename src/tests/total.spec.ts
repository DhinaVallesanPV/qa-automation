import { test, expect } from '@playwright/test';
import { DreamTotalPage } from '../pages/dreamTotalPage';

test('Dream Summary Validation', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://arjitnigam.github.io/myDreams/dreams-total.html', {
        waitUntil: 'domcontentloaded'
    });

    // Verify page title
    await expect(page).toHaveTitle('Dreams Total');

    const totalPage = new DreamTotalPage(page);
    
    // Wait for table to load
    await expect(totalPage.dreamsTable).toBeVisible();

    // Verify all stats
    expect(await totalPage.getDreamStat('Good Dreams')).toBe('6');
    expect(await totalPage.getDreamStat('Bad Dreams')).toBe('4');
    expect(await totalPage.getDreamStat('Total Dreams')).toBe('10');
    expect(await totalPage.getDreamStat('Recurring Dreams')).toBe('2');

    // Verify recurring dreams list (if exists on page)
    if (await totalPage.recurringDreamsList.count() > 0) {
        const recurringDreams = await totalPage.recurringDreamsList.allTextContents();
        expect(recurringDreams).toEqual(
            expect.arrayContaining([
                'Flying over mountains',
                'Lost in maze'
            ])
        );
    }
});