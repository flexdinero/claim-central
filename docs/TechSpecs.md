# Flex.IA Headless Scraper Tech Specs

This document defines the Playwright-based headless automation service added under `scraper/`.

- Runtime: Node.js 18+, TypeScript
- Engine: Playwright (Chromium)
- Packaging: Standalone NPM workspace package in `/scraper`
- Scheduling: In-process loop (later: job queue/cron)
- Publishing: Supabase table `claims_ingest`
- Secrets: dotenv, example at `.env.example`
- Logs: file logs/scraper.log + screenshots on errors

## Folder Structure
- scraper/
  - package.json, tsconfig.json
  - src/
    - run.ts (CLI entry)
    - scheduler.ts (interval loop)
    - service.ts (browser lifecycle, per-firm loop)
    - types.ts (unified types)
    - logger.ts (file logging + screenshots)
    - crypto.ts (AES-256-GCM utils for future encrypted storage)
    - supabasePublisher.ts (publishes to Supabase)
    - connector/
      - baseConnector.ts
      - genericConnector.ts (baseline login + discovery)

## Data Contract (claims_ingest)
Minimal fields inserted by publisher; extend as schema evolves:
- firmId (text)
- claimId (text)
- title (text)
- status (text)
- createdAt (timestamp, optional)
- updatedAt (timestamp, optional)
- policyholder (jsonb)
- documents (jsonb)
- raw (jsonb)

## Extensibility
- Implement firm-specific connectors in `connector/` extending BaseConnector
- Handle MFA/CAPTCHA using provider hooks and human-in-the-loop if needed
- Add retries, backoff, and per-step screenshots for reliability

## Future Roadmap
- Persist encrypted credentials with SCRAPER_SECRET_KEY
- Distributed scheduling (Supabase functions/cron / worker queue)
- Realtime notifications using Supabase Realtime channels
- Visual workflow (Latenode) adapters

