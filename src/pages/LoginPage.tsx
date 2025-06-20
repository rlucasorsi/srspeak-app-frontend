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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent)]" data-cy="login-page">
      <div className="w-full max-w-md">
        <div className="glass-card p-8 rounded-2xl space-y-6">
          <div className="flex flex-col items-center">
            <img src="SRSpeak Logo.png" 
                 alt="SRSpeak Logo" 
                 className="h-32 w-32 mb-4 bg-transparent object-contain"
                 style={{ background: 'transparent', backgroundColor: 'transparent' }}
                 data-cy="login-logo" />
            <h1 className="text-2xl font-semibold text-gray-900" data-cy="login-title">Faça login</h1>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4" data-cy="login-form">
            <div className="relative">
              <Mail className="input-icon" size={20} />
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white/20 border-white/20 text-gray-900 focus:border-white/30"
                required
                data-cy="login-email-input"
              />
            </div>
            
            <div className="relative">
              <Lock className="input-icon" size={20} />
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 bg-white/20 border-white/20 text-gray-900 focus:border-white/30"
                required
                data-cy="login-password-input"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full py-6 text-lg bg-[#00A5A5] hover:bg-[#008585]" 
              data-cy="login-submit-button"
            >
              Entrar
            </Button>
          </form>
          
          <p className="text-center">
            <a href="#" className="text-[#00A5A5] hover:text-[#008585] transition-colors" data-cy="forgot-password-link">
              Esqueceu a senha?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}