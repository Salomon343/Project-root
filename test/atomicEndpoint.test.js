const testData = require('../data/testData');

describe('Atomic Endpoints Test', () => {
    test('API Positive Test', async () => {
        const response = await getAtomicData();
        const parsedResponse = new AtomicResponseDTO(response);
        expect(parsedResponse.result).toBe('success');
    });

    test('API Negative Test', async () => {
        const response = await getAtomicData();
        const parsedResponse = new AtomicResponseDTO(response);
        expect(parsedResponse.result).toBe('failure');
    });

    test('UI Positive Test', async () => {
        const positiveData = testData.positiveTestData;
        const browser = await chromium.launch();
        const page = await browser.newPage();

        await page.goto('https://petstore.swagger.io/#/user/createUser');
        await page.click('button[class="btn try-out__btn"]');
        await page.waitForTimeout(2000);
        const result = await page.textContent('#resultElementId');
        await browser.close();

        expect(result).toBe(positiveData.expectedResult);
    });

    afterAll(async () => {

    });
});