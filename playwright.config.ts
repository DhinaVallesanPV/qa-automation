import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30000,
  retries: 1,
  reporter: [
    ['list'], 
    ['html', { outputFolder: 'test-results' }]
  ],
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }]
});