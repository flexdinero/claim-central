import fs from "fs";
import path from "path";

const logsDir = path.join(process.cwd(), "logs");
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });

export function log(msg: string) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  fs.appendFileSync(path.join(logsDir, "scraper.log"), line + "\n");
}

export async function saveScreenshot(buffer: Buffer, name?: string) {
  const file = path.join(logsDir, `${name ?? Date.now()}-screenshot.png`);
  await fs.promises.writeFile(file, buffer);
  log(`Saved screenshot: ${file}`);
}

