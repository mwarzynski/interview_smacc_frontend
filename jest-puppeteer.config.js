module.exports = {
    launch: {
        executablePath: "/usr/bin/chromium",
        headless: process.env.CI === 'true',
        slowMo: process.env.SLOW === 'true' ? 100 : 0,
        devTools: true,
        exitOnPageError: false,
    }
}