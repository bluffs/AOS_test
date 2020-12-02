describe("Basic test", () => {
  it("should display Email text on page", async () => {
    await page.goto('http://localhost:3000/');
    await expect(page).toMatch('Email');
  })
})

describe("Success test", () => {
  it("should display 'Success' text on page", async () => {
    await page.goto('http://localhost:3000/');
    await page.type('input[name="email"]', 'jalel@hotmail.com');
    await page.type('input[name="password"]', 'jalelpwd');
    await page.click('input[type="submit"]');
    await expect(page).toMatch('Success');
  })
})

describe("Bad credentials test", () => {
  it("should display 'Bad authentication' text on page", async () => {
    await page.goto('http://localhost:3000/');
    await page.type('input[name="email"]', 'notanemailaddress');
    await page.type('input[name="password"]', 'notapwd');
    await page.click('input[type="submit"]');
    await expect(page).toMatch('Bad authentication');
  })
})