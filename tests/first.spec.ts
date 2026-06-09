import {test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('can open plasywright website', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await expect(page).toHaveTitle(/reliablee/);
});