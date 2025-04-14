
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <img 
            src="/lovable-uploads/c6fb0acf-76a6-4bb5-b8e0-c7bfefa1c03a.png" 
            alt="SRSpeak Logo" 
            className="h-32 w-32 mb-4" 
          />
          <h1 className="text-3xl font-bold text-center mb-2">Bem-vindo ao SRSpeak</h1>
          <p className="text-lg text-center text-muted-foreground mb-8">
            Pratique seu vocabulário em inglês com repetição espaçada
          </p>
        </div>

        <div className="flex justify-between mb-8">
          <div className="flex items-center gap-2">
            <Clock className="text-[#00A5A5]" />
            <div>
              <p className="text-sm text-muted-foreground">Cards para hoje</p>
              <p className="text-2xl font-bold">15</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar className="text-[#00A5A5]" />
            <div>
              <p className="text-sm text-muted-foreground">Dias seguidos</p>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </div>

        <Button 
          onClick={() => navigate("/decks")}
          className="w-full py-6 text-lg bg-[#00A5A5] hover:bg-[#008585]"
        >
          Começar agora
        </Button>
      </div>
    </div>
  );
}
