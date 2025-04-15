
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, SmilePlus, Smile, Meh, Frown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function CardViewPage() {
  const { deckId } = useParams();
  const navigate = useNavigate();
  const [currentCard, setCurrentCard] = useState(1);
  const [showTranslation, setShowTranslation] = useState(false);
  const [reviewOriginal, setReviewOriginal] = useState(false);
  const isMobile = useIsMobile();

  const handleDifficulty = (difficulty: string) => {
    setShowTranslation(false);
    setReviewOriginal(false);
    setCurrentCard(prev => prev + 1);
  };

  const difficultyButtons = [
    { label: "Não lembro", icon: <Frown className="h-6 w-6" />, color: "bg-red-500 hover:bg-red-600 hover:shadow-lg hover:-translate-y-0.5 transition-all" },
    { label: "Difícil", icon: <Meh className="h-6 w-6" />, color: "bg-orange-500 hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all" },
    { label: "Fácil", icon: <Smile className="h-6 w-6" />, color: "bg-green-500 hover:bg-green-600 hover:shadow-lg hover:-translate-y-0.5 transition-all" },
    { label: "Muito Fácil", icon: <SmilePlus className="h-6 w-6" />, color: "bg-emerald-500 hover:bg-emerald-600 hover:shadow-lg hover:-translate-y-0.5 transition-all" },
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

      <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full gap-1">
        <div className="w-full aspect-video sm:aspect-[4/3] bg-card rounded-2xl flex items-center justify-center p-8 relative overflow-hidden">
          <div 
            className={`w-full h-full absolute transition-transform duration-500 ${
              showTranslation && !reviewOriginal
                ? '-translate-y-full' 
                : 'translate-y-0'
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <h2 className="text-4xl sm:text-5xl font-bold">I am a frontend developer</h2>
            </div>
          </div>
          <div 
            className={`w-full h-full absolute transition-transform duration-500 ${
              showTranslation && !reviewOriginal
                ? 'translate-y-0' 
                : 'translate-y-full'
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <h2 className="text-4xl sm:text-5xl font-bold">Eu sou um desenvolvedor frontend</h2>
            </div>
          </div>
        </div>

        {!showTranslation ? (
          <Button 
            className="w-full py-3 text-lg mt-1" 
            onClick={() => setShowTranslation(true)}
          >
            Mostrar resposta
          </Button>
        ) : (
          <>
            <div className="w-full grid grid-cols-2 gap-2 mt-1">
              {difficultyButtons.map((btn) => (
                <Button 
                  key={btn.label}
                  className={`${btn.color} rounded-xl flex items-center justify-center gap-2 p-3`}
                  onClick={() => handleDifficulty(btn.label.toLowerCase())}
                >
                  {btn.icon}
                  {!isMobile && <span>{btn.label}</span>}
                </Button>
              ))}
            </div>
            <Button
              variant="link"
              className="text-muted-foreground text-sm mt-1"
              onClick={() => setReviewOriginal(prev => !prev)}
            >
              {reviewOriginal ? "Ver tradução" : "Rever frase em inglês"}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
