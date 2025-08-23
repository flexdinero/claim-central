-- RPC: upsert_claims(claims jsonb)
create or replace function public.upsert_claims(claims jsonb)
returns void
language plpgsql
as $$
begin
  -- expects claims to be an array of objects with keys matching table columns
  insert into public.claims_ingest (firm_id, claim_id, title, status, created_at, updated_at, policyholder, documents, raw)
  select
    (c->>'firmId')::text,
    (c->>'claimId')::text,
    c->>'title',
    c->>'status',
    coalesce((c->>'createdAt')::timestamptz, now()),
    coalesce((c->>'updatedAt')::timestamptz, now()),
    c->'policyholder',
    c->'documents',
    c->'raw'
  from jsonb_array_elements(claims) as c
  on conflict (firm_id, claim_id)
  do update set
    title = excluded.title,
    status = excluded.status,
    created_at = excluded.created_at,
    updated_at = excluded.updated_at,
    policyholder = excluded.policyholder,
    documents = excluded.documents,
    raw = excluded.raw;
end;
$$;

