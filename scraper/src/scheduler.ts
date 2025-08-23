import { setTimeout as sleep } from "timers/promises";
import { runOnce } from "./service.js";
import { log } from "./logger.js";

export async function runScheduler(intervalMs: number) {
  log(`Scheduler starting: every ${Math.round(intervalMs / 1000)}s`);
  while (true) {
    try {
      await runOnce();
    } catch (e: any) {
      log(`Scheduler iteration error: ${e?.message || e}`);
    }
    await sleep(intervalMs);
  }
}

