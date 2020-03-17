const puppeteer = require('puppeteer');
const {
  pictures
} = require('./config');
const srcToImg = require('./utils');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/imghp');
  console.log('visiting ...');

  await page.setViewport({
    width: 1920,
    height: 500
  });
  console.log('reset viewport');

  await page.focus('.gLFyf');
  await page.keyboard.sendCharacter('minimal lifestyle');
  await page.click('.FAuhyb');
  console.log('generating image list...');

  page.on('load', async () => {
    console.log('page loading done, start fetching...');

    const srcs = await page.evaluate(() => {
      const images = document.querySelectorAll('#islrg img');
      return [...images].map(img => img.src);
    });
    console.log(`get ${srcs.length} images,  download started...`);

    for (let src of srcs) {
      await page.waitFor(500);
      await srcToImg(src, pictures);
    }

    await browser.close();

  });
})();