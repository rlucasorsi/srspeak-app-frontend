
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
    navigate("/welcome");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <img src="/lovable-uploads/c6fb0acf-76a6-4bb5-b8e0-c7bfefa1c03a.png" 
               alt="SRSpeak Logo" 
               className="h-32 w-32 mb-4" />
        </div>
        
        <h1 className="text-3xl font-bold text-center">Faça login</h1>
        
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
          
          <Button type="submit" className="w-full py-6 text-lg bg-[#00A5A5] hover:bg-[#008585]">
            Entrar
          </Button>
        </form>
        
        <p className="text-center mt-4">
          <a href="#" className="text-[#00A5A5] hover:underline">
            Esqueceu a senha?
          </a>
        </p>
      </div>
    </div>
  );
}
