import { test, expect } from '@playwright/test';
import { cleanLocalDB } from '../helpers/common';
import startPage from '../pages/startPage';
import { TODO_TEST_ITEMS } from '../Object-repository/test-data/inputs';


test.describe('task list testing', () => {

    let startPageinstance;

    test.beforeEach(async ({ page }) => {

      cleanLocalDB();
      startPageinstance = new startPage(page);
      await page.goto("http://localhost:3000");

    })
    test('should allow me to add multiple tasks', async ({ page }) => {
      
        await startPageinstance.addTask(TODO_TEST_ITEMS.DOHOMEWORK);
        await startPageinstance.addTask(TODO_TEST_ITEMS.FEEDCAT);
        await expect(page).toHaveScreenshot();
    });

    test('should allow me to check an available task', async({ page }) => {

      await startPageinstance.addTask(TODO_TEST_ITEMS.DOHOMEWORK);
      await startPageinstance.addTask(TODO_TEST_ITEMS.FEEDCAT);
      await startPageinstance.checkTask(1);
      await expect(page).toHaveScreenshot();

    })

    test('should allow me to delete an available task', async({ page }) => {

      await startPageinstance.addTask(TODO_TEST_ITEMS.WORKOUT);
      await startPageinstance.addTask(TODO_TEST_ITEMS.FEEDCAT);
      await startPageinstance.deleteTask(1);
      await expect(page).toHaveScreenshot();
    })

    test('should allow me to modify an available task', async({ page })=> {

      await startPageinstance.addTask(TODO_TEST_ITEMS.DOHOMEWORK);
      await startPageinstance.addTask(TODO_TEST_ITEMS.FEEDCAT);
      await startPageinstance.modifyTask(1, TODO_TEST_ITEMS.WORKOUT);
      await expect(page).toHaveScreenshot();
    })
});