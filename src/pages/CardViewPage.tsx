
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";
import { ThumbsUp, ThumbsDown, Smile, Frown, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function CardViewPage() {
  const { deckId } = useParams();
  const navigate = useNavigate();
  const [currentCard, setCurrentCard] = useState(1);
  const [showTranslation, setShowTranslation] = useState(false);
  const isMobile = useIsMobile();

  const handleDifficulty = (difficulty: string) => {
    setShowTranslation(false);
    setCurrentCard(prev => prev + 1);
  };

  const difficultyButtons = [
    { label: "Muito Fácil", icon: <Smile className="h-6 w-6" />, color: "bg-emerald-500 hover:bg-emerald-600" },
    { label: "Fácil", icon: <ThumbsUp className="h-6 w-6" />, color: "bg-green-500 hover:bg-green-600" },
    { label: "Difícil", icon: <ThumbsDown className="h-6 w-6" />, color: "bg-orange-500 hover:bg-orange-600" },
    { label: "Não Lembro", icon: <Frown className="h-6 w-6" />, color: "bg-red-500 hover:bg-red-600" },
  ];

  return (
    <div className="min-h-screen p-4 flex flex-col">
      <header className="max-w-2xl mx-auto w-full mb-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/c6fb0acf-76a6-4bb5-b8e0-c7bfefa1c03a.png" 
              alt="SRSpeak Logo" 
              className="h-8 w-8" 
            />
            <h1 className="text-xl font-semibold">1 de 10</h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/decks")}
            className="text-muted-foreground"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full gap-3">
        <div className="w-full aspect-[4/3] sm:aspect-square bg-card rounded-2xl flex items-center justify-center p-8 relative overflow-hidden">
          <div 
            className={`w-full h-full absolute transition-all duration-500 ${
              showTranslation 
                ? '-translate-y-full opacity-0' 
                : 'translate-y-0 opacity-100'
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <h2 className="text-4xl sm:text-5xl font-bold">apple</h2>
            </div>
          </div>
          <div 
            className={`w-full h-full absolute transition-all duration-500 ${
              showTranslation 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-full opacity-0'
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <h2 className="text-4xl sm:text-5xl font-bold">maçã</h2>
            </div>
          </div>
        </div>

        {!showTranslation ? (
          <Button 
            className="w-full py-4 text-lg" 
            onClick={() => setShowTranslation(true)}
          >
            Mostrar resposta
          </Button>
        ) : (
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2">
            {difficultyButtons.map((btn) => (
              <Button 
                key={btn.label}
                className={`${btn.color} ${isMobile ? 'p-3' : 'py-4 text-lg'}`}
                onClick={() => handleDifficulty(btn.label.toLowerCase())}
              >
                {isMobile ? (
                  btn.icon
                ) : (
                  <>
                    {btn.icon}
                    <span>{btn.label}</span>
                  </>
                )}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
