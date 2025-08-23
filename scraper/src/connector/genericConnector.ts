import { BaseConnector } from "./baseConnector.js";
import { Browser, Page } from "playwright";
import { FirmCredentials, ScraperResult, ScrapedClaim } from "../types.js";
import { log, saveScreenshot } from "../logger.js";
import { fillLoginForm, discoverLinks } from "./heuristics.js";
import { trySolveCaptcha, NoopCaptcha } from "../captcha.js";

export class GenericConnector extends BaseConnector {
  firmId = "generic";

  constructor(browser: Browser) {
    super(browser);
  }

  async login(page: Page, creds: FirmCredentials): Promise<void> {
    log(`Navigating to ${creds.portalUrl}`);
    await page.goto(creds.portalUrl, { waitUntil: "domcontentloaded" });

    await fillLoginForm(page, creds.email, creds.password);

    // Attempt CAPTCHA solve if present
    await trySolveCaptcha(page, new NoopCaptcha());

    await page.waitForLoadState("networkidle", { timeout: 20000 });

    // basic check: if still on login, capture
    const isStillLogin = await page.$('input[type="password"], input[name*="password" i]');
    if (isStillLogin) {
      await saveScreenshot(await page.screenshot(), "login-failed");
      throw new Error("Login likely failed (password field still present). Customize connector.");
    }
    log("Login step passed");
  }

  async scrape(page: Page): Promise<ScraperResult> {
    const links = await discoverLinks(page);

    const claims: ScrapedClaim[] = links
      .filter(l => /claim|assignment|ticket|case/i.test(l.text || "") || /claim|assignment/i.test(l.href))
      .map((l, idx) => ({
        firmId: this.firmId,
        claimId: `link-${idx}`,
        title: l.text,
        status: "UNKNOWN",
        raw: l,
      }));

    return { claims, errors: [] };
  }
}

