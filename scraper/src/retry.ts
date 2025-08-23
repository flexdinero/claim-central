export async function withRetry<T>(fn: () => Promise<T>, opts?: { retries?: number; baseMs?: number }) {
  const retries = opts?.retries ?? 3;
  const base = opts?.baseMs ?? 500;
  let lastErr: any;
  for (let i = 0; i <= retries; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      const delay = Math.min(5000, base * Math.pow(2, i));
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  throw lastErr;
}

