import { createClient } from "@supabase/supabase-js";
import { ScrapedClaim, Publisher } from "./types.js";

export function makeSupabasePublisher(): Publisher {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error("Supabase env (SUPABASE_URL, SUPABASE_*_KEY) required");
  const supabase = createClient(url, key);

  return {
    async publishClaims(claims: ScrapedClaim[]): Promise<void> {
      if (!claims.length) return;
      // Prefer RPC upsert for idempotency
      const { error } = await supabase.rpc("upsert_claims", { claims: claims as any });
      if (error) throw error;
    },
  };
}

