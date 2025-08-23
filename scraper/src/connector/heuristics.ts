import { Page } from "playwright";

export async function fillLoginForm(page: Page, email: string, password: string) {
  const emailSel = 'input[type="email"], input[name*="email" i], input#email';
  const passSel = 'input[type="password"], input[name*="password" i]';
  const submitSel = 'button[type="submit"], button:has-text("Log in"), button:has-text("Sign in")';

  await page.waitForSelector(emailSel, { timeout: 15000 });
  await page.fill(emailSel, email);
  await page.fill(passSel, password);
  const button = await page.$(submitSel);
  if (button) await button.click();
}

export async function discoverLinks(page: Page) {
  return await page.$$eval("a", as => as.map(a => ({ href: (a as HTMLAnchorElement).href, text: a.textContent?.trim() })));
}

