const {chromium } = require('playwright');

(async() => {
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://amazon.com");

    try{
    await page.click("[data-action-type='DISMISS']");
    await page.click("#aee-xop-dismiss");
    } catch(e) {}
    
    await page.click("text=Today's Deals");
    await page.click("[data-test-id='carousel-deals-collection-FASH']")

    await page.click("[aria-label='Coats & Jackets Under $50'] >> nth=1")

    await page.selectOption('#native_drop down_selected_size_name', {id : 'native_size_name_2'})

    await browser.close();
})