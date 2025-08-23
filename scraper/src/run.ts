import 'dotenv/config';
import { runScheduler } from './scheduler.js';
import { runOnce } from './service.js';
import { log } from './logger.js';

const cmd = process.argv[2] ?? 'scrape';

(async () => {
  try {
    if (cmd === 'schedule') {
      const minutes = Number(process.env.SCRAPE_INTERVAL_MINUTES ?? '5');
      await runScheduler(minutes * 60 * 1000);
    } else {
      await runOnce();
    }
  } catch (e: any) {
    log(`Fatal: ${e?.message || e}`);
    process.exitCode = 1;
  }
})();

