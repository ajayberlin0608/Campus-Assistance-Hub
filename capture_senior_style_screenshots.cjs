// capture_senior_style_screenshots.cjs
const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const screenshotsDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir);
}

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: 'new',
    defaultViewport: { width: 1280, height: 720, deviceScaleFactor: 2 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  // 1. Hero & Header
  console.log('Capturing Hero & Header...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(screenshotsDir, 'ref_hero.png') });

  // 2. Cards Top Row
  console.log('Capturing Cards Top Row...');
  await page.evaluate(() => {
    const el = document.querySelector('.service-grid');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(screenshotsDir, 'ref_cards_top.png') });

  // 3. Cards Bottom Row / Details
  console.log('Capturing Service Details...');
  const firstCard = await page.$('.service-card');
  if (firstCard) {
    await firstCard.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(screenshotsDir, 'ref_service_details.png') });
    const closeBtn = await page.$('.close-btn');
    if (closeBtn) await closeBtn.click();
    await new Promise(r => setTimeout(r, 400));
  }

  // 4. Trigger lifecycle events and capture LifeCycle Monitor + Footer
  console.log('Capturing LifeCycle Monitor & Footer...');
  const cards = await page.$$('.service-card');
  if (cards.length > 2) {
    await cards[1].click();
    await new Promise(r => setTimeout(r, 200));
    const close1 = await page.$('.close-btn');
    if (close1) await close1.click();
    await new Promise(r => setTimeout(r, 200));
  }
  const setStateBtn = await page.$('.api-setstate-btn');
  if (setStateBtn) {
    await setStateBtn.click();
    await new Promise(r => setTimeout(r, 200));
  }

  await page.evaluate(() => {
    const el = document.getElementById('lifecycle-telemetry');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(screenshotsDir, 'ref_lifecycle_footer.png') });

  // 5. HOTS Modal Top & Bottom
  console.log('Capturing HOTS Modal...');
  await page.evaluate(() => window.scrollTo(0, 0));
  const hotsBtn = await page.$('.hots-btn');
  if (hotsBtn) {
    await hotsBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(screenshotsDir, 'ref_hots_top.png') });

    // Scroll modal down to table
    await page.evaluate(() => {
      const modalContent = document.querySelector('.modal__content');
      if (modalContent) modalContent.scrollTop = 400;
    });
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(screenshotsDir, 'ref_hots_bottom.png') });

    const closeHots = await page.$('.close-btn');
    if (closeHots) await closeHots.click();
    await new Promise(r => setTimeout(r, 400));
  }

  // 6. Emergency Modal Top & Bottom
  console.log('Capturing Emergency Modal...');
  const emergencyBtn = await page.$('.emergency-btn');
  if (emergencyBtn) {
    await emergencyBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(screenshotsDir, 'ref_emergency_top.png') });

    // Scroll modal down
    await page.evaluate(() => {
      const modalContent = document.querySelector('.modal__content');
      if (modalContent) modalContent.scrollTop = 250;
    });
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(screenshotsDir, 'ref_emergency_bottom.png') });

    const closeEm = await page.$('.close-btn');
    if (closeEm) await closeEm.click();
    await new Promise(r => setTimeout(r, 400));
  }

  console.log('Reference style screenshots captured!');
  await browser.close();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
