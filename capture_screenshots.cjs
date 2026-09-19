// capture_screenshots.cjs
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
    defaultViewport: { width: 1280, height: 900, deviceScaleFactor: 2 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  // 1. Header and Hero View
  console.log('Capturing Screenshot 1: Hero and Header...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(screenshotsDir, 'screenshot_1_hero_header.png') });

  // 2. Services Grid View
  console.log('Capturing Screenshot 2: Services Grid...');
  await page.evaluate(() => {
    const el = document.querySelector('.service-grid');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(screenshotsDir, 'screenshot_2_service_cards.png') });

  // 3. Dynamic Service Details Modal (Click First Card)
  console.log('Capturing Screenshot 3: Service Details Modal...');
  const firstCard = await page.$('.service-card');
  if (firstCard) {
    await firstCard.click();
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(screenshotsDir, 'screenshot_3_service_details.png') });
    // Close modal
    const closeBtn = await page.$('.close-btn');
    if (closeBtn) await closeBtn.click();
    await new Promise(r => setTimeout(r, 500));
  }

  // 4. LifeCycle Monitor with triggered state and forceUpdate
  console.log('Capturing Screenshot 4: LifeCycle Monitor Telemetry...');
  // Click a couple of services to generate rich componentDidUpdate logs
  const cards = await page.$$('.service-card');
  if (cards.length > 2) {
    await cards[1].click(); // Library
    await new Promise(r => setTimeout(r, 300));
    const close1 = await page.$('.close-btn');
    if (close1) await close1.click();
    await new Promise(r => setTimeout(r, 300));

    await cards[2].click(); // Transport
    await new Promise(r => setTimeout(r, 300));
    const close2 = await page.$('.close-btn');
    if (close2) await close2.click();
    await new Promise(r => setTimeout(r, 300));
  }

  // Click setState and forceUpdate
  const setStateBtn = await page.$('.api-setstate-btn');
  if (setStateBtn) {
    await setStateBtn.click();
    await new Promise(r => setTimeout(r, 200));
    await setStateBtn.click();
    await new Promise(r => setTimeout(r, 200));
  }

  const forceUpdateBtn = await page.$('.api-forceupdate-btn');
  if (forceUpdateBtn) {
    await forceUpdateBtn.click();
    await new Promise(r => setTimeout(r, 200));
  }

  // Scroll to LifeCycle Monitor
  await page.evaluate(() => {
    const el = document.getElementById('lifecycle-telemetry');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(screenshotsDir, 'screenshot_4_lifecycle_monitor.png') });

  // 5. HOTS Modal View
  console.log('Capturing Screenshot 5: HOTS Modal...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 300));
  const hotsBtn = await page.$('.hots-btn');
  if (hotsBtn) {
    await hotsBtn.click();
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(screenshotsDir, 'screenshot_5_hots_scalability.png') });
    const closeHots = await page.$('.close-btn');
    if (closeHots) await closeHots.click();
    await new Promise(r => setTimeout(r, 500));
  }

  // 6. Emergency Modal View
  console.log('Capturing Screenshot 6: Emergency Modal...');
  const emergencyBtn = await page.$('.emergency-btn');
  if (emergencyBtn) {
    await emergencyBtn.click();
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(screenshotsDir, 'screenshot_6_emergency_directory.png') });
    const closeEm = await page.$('.close-btn');
    if (closeEm) await closeEm.click();
    await new Promise(r => setTimeout(r, 500));
  }

  console.log('All core screenshots captured successfully!');
  await browser.close();
}

run().catch(err => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
