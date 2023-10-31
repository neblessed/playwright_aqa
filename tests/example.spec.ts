import { test, expect } from '@playwright/test'
import { GooglePage } from '../pages/main.page'

test('First test ever!!!', async ({ page }) => {
    const searchData = 'Playwright here!'

    const googlePage = new GooglePage(page)
    await test.step('Переход на сайт google.com', async () => {
        googlePage.open()
    })
    await test.step(`Заполнение поля поиска значением ${searchData}`, async () => {
        googlePage.fillSearchField(searchData)
    })
    await test.step('Клик по кнопке [Найти в Google]', async () => {
        googlePage.startSearch()
    })
})