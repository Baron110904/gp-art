
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

// Ne créer le client Supabase que si les URL et clés sont disponibles
export const supabase = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export function useAuthSupabase() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Vérifier si le client Supabase est disponible
    if (!supabase) {
      setError("Configuration Supabase manquante");
      setLoading(false);
      return;
    }

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
    }).catch(err => {
      console.error("Erreur lors de la récupération de l'utilisateur:", err);
      setError("Erreur lors de la récupération de l'utilisateur");
      setLoading(false);
    });

    return () => subscription?.unsubscribe();
  }, []);

  return { user, loading, error, isConfigured: !!supabase };
}
