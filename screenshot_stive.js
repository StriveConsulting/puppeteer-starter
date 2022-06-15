const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  });

  await page.goto('https://striveconsulting.com/');
  await page.waitForTimeout(1000)

  await page.pdf({ path: 'strive_home_page.pdf', format: 'a4' });

  await page.click('#primary-nav a[href="/blog/"]')
  await page.waitForTimeout(2000)
  await page.screenshot({ path: 'strive_blog_page.png' });

  await page.click('a.read-more-link')
  await page.waitForTimeout(2000)
  await page.screenshot({ path: 'strive_blog_post2.png' });
  

  await browser.close();
})();