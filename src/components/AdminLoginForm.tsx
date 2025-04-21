
import React, { useState } from "react";
import { supabase } from "@/hooks/useAuthSupabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { Lock, User } from "lucide-react";

const AdminLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérifier si Supabase est correctement configuré
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      toast("Erreur de configuration", { 
        description: "La configuration de Supabase est incomplète. Veuillez contacter l'administrateur.", 
        className: "bg-destructive text-destructive-foreground" 
      });
      return;
    }
    
    setSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setSubmitting(false);

    if (error) {
      toast("Mauvais identifiants", { description: "Veuillez réessayer.", className: "bg-destructive text-destructive-foreground" });
    } else {
      toast("Bienvenue !", { description: "Connexion réussie", className: "bg-green-500 text-white" });
    }
  };

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
      
      <div className="text-sm text-gray-500 pt-4 border-t border-gray-200">
        <p>Veuillez configurer vos secrets Supabase dans les paramètres de Lovable:</p>
        <ul className="list-disc pl-5 mt-1">
          <li>VITE_SUPABASE_URL</li>
          <li>VITE_SUPABASE_ANON_KEY</li>
        </ul>
      </div>
    </form>
  );
};

export default AdminLoginForm;
