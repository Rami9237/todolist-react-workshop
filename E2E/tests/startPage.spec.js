import { test, expect } from '@playwright/test';
import { cleanLocalDB } from '../helpers/common';
import startPage from '../pages/startPage';
import { TODO_TEST_ITEMS } from '../Object-repository/test-data/inputs';

test.describe('task list testing', () => {

    let startPageinstance;

    test.beforeEach(async ({ page }) => {
    
      startPageinstance = new startPage(page);
      await page.goto("http://localhost:3000");
    });

    test('should allow me to add todo items', async ({ page }) => {
      

        await startPageinstance.addTask(TODO_TEST_ITEMS.DOHOMEWORK);
        await expect(page).toHaveScreenshot();
    });
});