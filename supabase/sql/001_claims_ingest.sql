-- Table: public.claims_ingest
create table if not exists public.claims_ingest (
  firm_id text not null,
  claim_id text not null,
  title text,
  status text,
  created_at timestamptz,
  updated_at timestamptz,
  policyholder jsonb,
  documents jsonb,
  raw jsonb,
  inserted_at timestamptz not null default now(),
  constraint claims_ingest_pkey primary key (firm_id, claim_id)
);

-- Indexes for common queries
create index if not exists idx_claims_ingest_updated_at on public.claims_ingest (updated_at nulls last);
create index if not exists idx_claims_ingest_inserted_at on public.claims_ingest (inserted_at desc);

