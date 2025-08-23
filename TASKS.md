# TASKS

- [x] SCRAPER: Define Supabase table `claims_ingest` schema and RLS (# COMMENTS: SQL created in supabase/sql/001_claims_ingest.sql and 003_claims_rls.sql. Apply via Supabase SQL editor or CLI.)
- [x] BACKEND: Supabase RPC upsert (# COMMENTS: SQL created in supabase/sql/002_claims_upsert_rpc.sql; publisher now calls rpc upsert_claims.)
- [x] SCRAPER: Add retry/backoff + step-level screenshots (# COMMENTS: withRetry utility added; service uses it for login/scrape/publish; error screenshots on failure.))
- [x] SCRAPER: CI pipeline (# COMMENTS: .github/workflows/ci.yml added for typecheck/build/smoke.)
- [x] FRONTEND: UI subscription (# COMMENTS: useRealtimeClaims hook added; Claims page pulls realtime data.)
- [x] SCRAPER: Secrets storage (# COMMENTS: Encrypted keystore added via crypto.ts + keystore.ts; store never logs secrets.)
- [x] SCRAPER: CAPTCHA handling framework (# COMMENTS: captcha.ts with Noop solver; detect and plug provider or human-in-loop.)
- [x] SCRAPER: MFA hook scaffolding (# COMMENTS: mfa.ts with providers and wait function.)
- [ ] SCRAPER: Per‑firm connectors (First wave) (# COMMENTS: Identify selectors, URLs, navigation paths; write connectors extending BaseConnector; add unit smoke tests with mocked pages.)
- [ ] SCRAPER: Scheduler hardening (# COMMENTS: Ensure single-flight, jitter, and lock to avoid overlap; metrics on run duration and success rate.)
- [ ] SCRAPER: Observability (# COMMENTS: Structured logs, error taxonomy, optional OpenTelemetry trace spans.)
- [ ] BILLING: Stripe plan gating (# COMMENTS: Enforce plan-based limits: number of firm connections, notification frequency; check on publish.)

