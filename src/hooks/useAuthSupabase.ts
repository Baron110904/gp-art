
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Récupère l'URL et la clé publique Supabase de l'environnement
// NOTE : Veuillez configurer correctement vos secrets Lovable Supabase.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Vérifier si les variables d'environnement sont définies
if (!supabaseUrl || !supabaseKey) {
  console.error(
    "Les variables d'environnement Supabase ne sont pas définies. " +
    "Assurez-vous d'avoir configuré VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY " +
    "dans les secrets Lovable."
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export function useAuthSupabase() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Check à l'init
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { user, loading };
}
