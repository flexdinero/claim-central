import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface ClaimRow {
  firm_id: string;
  claim_id: string;
  title: string | null;
  status: string | null;
  updated_at: string | null;
}

export function useRealtimeClaims() {
  const [claims, setClaims] = useState<ClaimRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from("claims_ingest")
        .select("firm_id, claim_id, title, status, updated_at")
        .order("updated_at", { ascending: false, nullsFirst: false })
        .limit(200);
      if (!mounted) return;
      if (error) {
        console.error(error);
      } else {
        setClaims(data ?? []);
      }
      setLoading(false);
    }
    load();

    const channel = supabase
      .channel("claims_ingest-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "claims_ingest" },
        (payload) => {
          setClaims((prev) => {
            const row = payload.new as ClaimRow;
            const filtered = prev.filter((c) => !(c.firm_id === row.firm_id && c.claim_id === row.claim_id));
            return [row, ...filtered].slice(0, 200);
          });
        }
      )
      .subscribe();

    return () => {
      mounted = false;
      supabase.removeChannel(channel);
    };
  }, []);

  return { claims, loading };
}

