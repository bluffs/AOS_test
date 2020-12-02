const puppeteer = require('puppeteer')

const test_pup = async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  await page.goto('http://localhost:3000/')
  await page.type('input[name="email"]', 'jalel@hotmail.com');
  await page.type('input[name="password"]', 'jalelpwd');
  await page.click('input[type="submit"]');

  await browser.close()
}

test_pup()