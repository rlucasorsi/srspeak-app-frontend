
import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login
    navigate("/decks");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <img src="/placeholder.svg" alt="SRSpeak Logo" className="h-12 w-12 mb-2" />
          <h2 className="text-2xl font-semibold">SRSpeak</h2>
        </div>
        
        <h1 className="text-3xl font-bold text-center mt-8">Faça login</h1>
        
        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          <div className="relative">
            <Mail className="input-icon" size={20} />
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              required
            />
          </div>
          
          <div className="relative">
            <Lock className="input-icon" size={20} />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10"
              required
            />
          </div>
          
          <Button type="submit" className="w-full py-6 text-lg">
            Entrar
          </Button>
        </form>
        
        <p className="text-center mt-4">
          <a href="#" className="text-primary hover:underline">
            Esqueceu a senha?
          </a>
        </p>
      </div>
    </div>
  );
}
