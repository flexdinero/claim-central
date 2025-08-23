# Flex.IA Scraper Blueprint

Objective: Build a robust, modular Playwright headless automation layer to connect to IA firm portals, authenticate (incl. MFA/CAPTCHA), scrape claims and artifacts, and publish to Supabase for real‑time sync into Flex.IA UI.

Scope (from FlexIA.md):
- Firm Connector & Headless Login (multi-flow)
- Full-portal scrape, modular connectors
- Realtime: detect new claims, publish instantly
- Scheduler & stability: retries, screenshots, logs
- Supabase integration and Stripe billing coupling later

Key Decisions:
- Playwright Chromium; per-firm connectors extend BaseConnector
- Env-driven creds; future encrypted store guarded by SCRAPER_SECRET_KEY
- Publishing via Supabase JS client into `claims_ingest`
- CLI modes: one‑shot scrape vs scheduled loop

Risks & Mitigations:
- CAPTCHA/MFA: support provider callbacks + human-in-loop fallback
- Portal variance: per-firm connectors; contract tests; visual checks
- Ban risk: throttle; rotate contexts; respect robots/ToS and legal

Deliverables now added:
- /scraper service with core modules
- docs/* with TechSpecs + Implementation + Blueprint
- .env.example for local configuration

