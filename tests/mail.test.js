describe('mail form', () => {
  beforeAll(async () => {
    await page.goto('http://localhost/#/mail')
  })

  it('mail should be sent successfully', async () => {
    // Click at the first input.
    await page.click('input[aria-label="From"]')

    // Fill form.
    await page.type('input[aria-label="From"]', "test@smacc.io")
    await page.type('input[aria-label="To"]', 'smacc@yopmail.com')
    await page.type('input[aria-label="Subject"]', 'Test')

    const textarea = await page.$("#app > div > main > div > div > form > div.v-input.v-textarea.v-text-field.theme--light > div > div.v-input__slot > div > textarea")
    await textarea.type('Test message')
    // await page.type('text-area[aria-label="Message"]', 'Test message')

    // Click submit and wait for the alert (success or error).
    const submit = await page.$('#app > div > main > div > div > form > button:nth-child(5)')
    await Promise.all([
      submit.click(),
      // Wait for the 'Success' alert.
      page.waitForFunction('document.querySelector("#app > div > main > div > div > div.v-alert.v-alert--outline").style.display == ""')
    ]);

    // Expect 'Success' message.
    await expect(page).toMatch('Success.')
  }, 20000)

  it('invalid input data, therefore cant submit', async () => {
     // Click at the first input.
     await page.click('input[aria-label="From"]')

     // Fill form.
     await page.type('input[aria-label="From"]', "test@smacc.io")
     await page.type('input[aria-label="To"]', 'smacc') // invalid
     await page.type('input[aria-label="Subject"]', 'Test')

    // Check if we can submit (we shouldn't be able to do so).
    const submitDisabled = await page.evaluate(() => {
        return document.querySelector("#app > div > main > div > div > form > button:nth-child(5)").disabled
    })
    expect(submitDisabled).toBe(true);
  }, 20000)
})