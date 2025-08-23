-- Enable RLS and policies for public.claims_ingest
alter table public.claims_ingest enable row level security;

-- Policy: allow read to authenticated users only
create policy if not exists claims_ingest_select_auth
on public.claims_ingest
for select
to authenticated
using (true);

-- Policy: allow inserts via service role only (handled by server key)
-- We do not create an insert policy for anon/auth users.

-- Realtime: enable
-- Supabase enables realtime by default on tables; ensure publication exists
-- This may be a no-op depending on project defaults.
alter publication supabase_realtime add table public.claims_ingest;

