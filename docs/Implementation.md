# Implementation Plan (Scraper)

Phase 1 (now):
- Scaffold Playwright service (done)
- Env wiring + Supabase publishing (done)
- Generic connector for basic login + link discovery (done)

Phase 2:
- Define Supabase `claims_ingest` table and RPC for upsert/dedup
- Add retry/backoff utilities; structured error taxonomy
- Add MFA & CAPTCHA hooks (email/SMS/app provider; 2-step flows)
- Per-firm connectors: map top 3 target IA portals

Phase 3:
- Scheduler hardening; at-least-once semantics
- Webhook/Realtime channel push to UI
- Secrets storage and rotation plan
- CI: lint, typecheck, e2e smoke (headed in CI container)

Phase 4:
- Node-based orchestrator or Latenode migration
- Observability (OpenTelemetry, traces of flows)
- Visual regression for portal changes

