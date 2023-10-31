import { Page, Locator } from '@playwright/test';

export class GooglePage {
    readonly page: Page
    readonly searchField: Locator
    readonly searchBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.searchField = page.locator('textarea[name="q"]')
        this.searchBtn = page.getByLabel('Поиск в Google')
    }

    async fillSearchField(text: string): Promise<GooglePage> {
        await this.searchField.fill(text)
        return this
    }

    async startSearch(): Promise<GooglePage> {
        await this.searchBtn.first().click();
        return this
    }
}
