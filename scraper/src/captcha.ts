import { Page } from "playwright";
import { log } from "./logger.js";

export interface CaptchaSolver {
  solve(page: Page): Promise<boolean>;
}

export class NoopCaptcha implements CaptchaSolver {
  async solve(): Promise<boolean> {
    log("CAPTCHA solver not configured; skipping");
    return false;
  }
}

export async function trySolveCaptcha(page: Page, solver: CaptchaSolver): Promise<boolean> {
  // Placeholder heuristic: look for iframes containing recaptcha/hcaptcha
  const frames = page.frames();
  const hasCaptcha = frames.some(f => /recaptcha|hcaptcha/i.test(f.url()));
  if (!hasCaptcha) return false;
  log("Detected possible CAPTCHA; attempting solver");
  return await solver.solve(page);
}

