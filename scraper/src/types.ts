export type LoginMethod = "BASIC" | "MFA" | "CAPTCHA" | "CUSTOM";

export interface FirmCredentials {
  firmId: string; // internal id
  portalUrl: string;
  email: string;
  password: string;
  apiKey?: string;
  loginMethod?: LoginMethod;
  mfaCodeProvider?: () => Promise<string>; // injected provider (email/sms/app)
}

export type ScrapeEvent =
  | { type: "LOGIN_START"; firmId: string }
  | { type: "LOGIN_SUCCESS"; firmId: string }
  | { type: "LOGIN_FAILED"; firmId: string; reason: string }
  | { type: "SCRAPE_START"; firmId: string }
  | { type: "SCRAPE_DATA"; firmId: string; payload: unknown }
  | { type: "SCRAPE_DONE"; firmId: string }
  | { type: "ERROR"; firmId: string; error: string };

export interface ScrapedClaim {
  firmId: string;
  claimId: string;
  title?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  policyholder?: {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
  };
  documents?: Array<{ name: string; url?: string; type?: string; size?: number }>;
  raw?: unknown; // unstructured for debugging
}

export interface ScraperResult {
  claims: ScrapedClaim[];
  errors: string[];
}

export interface Publisher {
  publishClaims: (claims: ScrapedClaim[]) => Promise<void>;
}

