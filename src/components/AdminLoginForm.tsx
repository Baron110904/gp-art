
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
    </form>
  );
};

export default AdminLoginForm;
