export type MfaSource = "ENV" | "TOTP" | "CALLBACK" | "NONE";

export interface MfaProvider {
  getCode(): Promise<string | null>;
}

export class EnvMfaProvider implements MfaProvider {
  constructor(private envKey: string) {}
  async getCode(): Promise<string | null> {
    const val = process.env[this.envKey];
    return val ?? null;
  }
}

export class CallbackMfaProvider implements MfaProvider {
  constructor(private fn: () => Promise<string>) {}
  async getCode(): Promise<string | null> { return this.fn(); }
}

export async function waitForMfaCode(provider: MfaProvider, timeoutMs = 120000): Promise<string | null> {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const code = await provider.getCode();
    if (code && code.trim().length >= 4) return code.trim();
    await new Promise(r => setTimeout(r, 2000));
  }
  return null;
}

