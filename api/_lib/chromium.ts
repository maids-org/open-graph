import core from 'puppeteer-core';
import { getOptions } from './options';

async function getPage(isDev: boolean) {
  const options = await getOptions(isDev);
  const browser = await core.launch(options);
  return await browser.newPage();
}

export async function getScreenshot(html: string, isDev: boolean) {
  const page = await getPage(isDev);
  await page.setViewport({ width: 1200, height: 630 });
  await page.setContent(html);
  return await page.screenshot({ type: 'jpeg', quality: 100 });
}
