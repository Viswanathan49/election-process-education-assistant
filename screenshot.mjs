import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
  await page.goto('https://election-assistant-45536207543.asia-south1.run.app/', { waitUntil: 'networkidle2' });
  
  // Wait for the button and click it
  await page.waitForSelector('aside button');
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const updateBtn = buttons.find(b => b.textContent.includes('View All Updates'));
    if (updateBtn) updateBtn.click();
  });
  
  // Wait for drawer animation to finish (approx 500ms)
  await new Promise(r => setTimeout(r, 1000));
  
  await page.screenshot({ path: 'C:\\Users\\Vishwa\\.gemini\\antigravity\\brain\\e9498535-35a2-4011-877d-83a38553aec0\\Final_Logic_Evidence.png', fullPage: false });
  await browser.close();
  console.log('Screenshot saved successfully.');
})();
