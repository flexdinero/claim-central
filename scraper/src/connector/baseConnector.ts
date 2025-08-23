import { Browser, Page } from "playwright";
import { FirmCredentials, ScraperResult } from "../types.js";

export abstract class BaseConnector {
  abstract firmId: string;

  constructor(protected browser: Browser) {}

  abstract login(page: Page, creds: FirmCredentials): Promise<void>;
  abstract scrape(page: Page): Promise<ScraperResult>;
}

