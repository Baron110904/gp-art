
import React, { useState } from "react";
import { supabase } from "@/hooks/useAuthSupabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { Lock, User, AlertCircle } from "lucide-react";

const AdminLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérifier si Supabase est correctement configuré
    if (!supabase) {
      toast("Erreur de configuration", { 
        description: "La configuration de Supabase est incomplète. Veuillez configurer vos secrets Supabase.", 
        className: "bg-destructive text-destructive-foreground" 
      });
      return;
    }
    
    setSubmitting(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        toast("Mauvais identifiants", { description: "Veuillez réessayer.", className: "bg-destructive text-destructive-foreground" });
      } else {
        toast("Bienvenue !", { description: "Connexion réussie", className: "bg-green-500 text-white" });
      }
    } catch (err) {
      toast("Erreur de connexion", { 
        description: "Une erreur s'est produite lors de la tentative de connexion.", 
        className: "bg-destructive text-destructive-foreground" 
      });
      console.error("Erreur de connexion:", err);
    } finally {
      setSubmitting(false);
    }
  };

  // Si Supabase n'est pas configuré, afficher une alerte plus visible
  if (!supabase) {
    return (
      <div className="bg-white max-w-md mx-auto mt-16 rounded-lg p-6 shadow-lg space-y-6">
        <div className="p-4 border rounded-md bg-amber-50 border-amber-200 text-amber-800">
          <div className="flex items-center mb-3">
            <AlertCircle className="w-5 h-5 mr-2" />
            <h3 className="font-semibold">Configuration requise</h3>
          </div>
          <p className="mb-3">
            Vous devez configurer vos secrets Supabase pour utiliser l'espace administrateur.
          </p>
          <div className="text-sm">
            <p>Veuillez ajouter ces variables dans les paramètres de Lovable:</p>
            <ul className="list-disc pl-5 mt-1">
              <li>VITE_SUPABASE_URL</li>
              <li>VITE_SUPABASE_ANON_KEY</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      className="bg-white max-w-md mx-auto mt-16 rounded-lg p-6 shadow-lg space-y-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
        <Lock className="w-5 h-5" /> Espace privé Photographe
      </h2>
      <div>
        <Label htmlFor="email">Adresse email</Label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-4 w-4 text-gray-400" />
          </div>
          <Input
            id="email"
            type="email"
            autoComplete="username"
            placeholder="photographe@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="pl-10"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="password">Mot de passe</Label>
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="Votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1"
        />
      </div>
      <Button className="w-full" type="submit" disabled={submitting}>
        {submitting ? "Connexion..." : "Se connecter"}
      </Button>
    </form>
  );
};

export default AdminLoginForm;
