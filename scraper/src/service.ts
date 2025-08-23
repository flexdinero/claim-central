import { chromium } from "playwright";
import { log } from "./logger.js";
import { GenericConnector } from "./connector/genericConnector.js";
import { makeSupabasePublisher } from "./supabasePublisher.js";
import type { FirmCredentials, ScraperResult } from "./types.js";
import { withRetry } from "./retry.js";

function getCredentialsFromEnv(): FirmCredentials[] {
  // Supports multiple sets using index suffixes: 1..N
  const list: FirmCredentials[] = [];
  for (let i = 1; i <= 10; i++) {
    const prefix = i === 1 ? "" : `_${i}`;
    const portalUrl = process.env[`FIRM_PORTAL_URL${prefix}`];
    const email = process.env[`FIRM_EMAIL${prefix}`];
    const password = process.env[`FIRM_PASSWORD${prefix}`];
    if (portalUrl && email && password) {
      list.push({ firmId: `firm${i}`, portalUrl, email, password });
    }
  }
  return list;
}

export async function runOnce() {
  const publisher = makeSupabasePublisher();
  const credsList = getCredentialsFromEnv();
  if (credsList.length === 0) throw new Error("No credentials configured via env");

  const browser = await chromium.launch({ headless: true });
  try {
    for (const creds of credsList) {
      const context = await browser.newContext();
      const page = await context.newPage();
      const connector = new GenericConnector(browser);
      try {
        log(`LOGIN_START ${creds.firmId}`);
        await withRetry(() => connector.login(page, creds), { retries: 2 });
        log(`SCRAPE_START ${creds.firmId}`);
        const result: ScraperResult = await withRetry(() => connector.scrape(page), { retries: 2 });
        log(`Publishing ${result.claims.length} claims for ${creds.firmId}`);
        await withRetry(() => publisher.publishClaims(result.claims), { retries: 2 });
      } catch (e: any) {
        log(`ERROR ${creds.firmId} ${e?.message || e}`);
        await page.screenshot({ path: `logs/${creds.firmId}-error.png` });
      } finally {
        await context.close();
      }
    }
  } finally {
    await browser.close();
  }
}

