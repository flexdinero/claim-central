import fs from "fs";
import path from "path";
import { encrypt, decrypt } from "./crypto.js";

const storePath = path.join(process.cwd(), "secure-store.json");

export interface SecretRecord { [k: string]: string }

export function saveSecret(key: string, value: string) {
  const data = fs.existsSync(storePath) ? JSON.parse(fs.readFileSync(storePath, "utf8")) : {};
  data[key] = encrypt(value);
  fs.writeFileSync(storePath, JSON.stringify(data, null, 2));
}

export function loadSecret(key: string): string | null {
  if (!fs.existsSync(storePath)) return null;
  const data = JSON.parse(fs.readFileSync(storePath, "utf8"));
  const enc = data[key];
  if (!enc) return null;
  return decrypt(enc);
}

