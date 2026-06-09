import { Page, Locator } from "@playwright/test";

export class LoginPage {
    private readonly usernameInput: Locator;
    constructor(private page: Page) {
        this.usernameInput = page.locator("#username");
    }

    // async navigate(url: string): Promise<void> {
    //     await this.page.goto(url);
    // }

    async enterUsername(username: string): Promise<void> {
        await this.usernameInput.fill(username);
    }

    async clickUsername() {
        await this.usernameInput.click();
    }

    async navigate(): Promise<void> {
        await this.page.goto('https://playwright.dev');
    }

}