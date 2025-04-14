
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { Check, X, Minus } from "lucide-react";

export default function CardViewPage() {
  const { deckId } = useParams();
  const [currentCard, setCurrentCard] = useState(1);
  const [showTranslation, setShowTranslation] = useState(false);

  const handleDifficulty = (difficulty: string) => {
    // In the future, this will save the difficulty and move to the next card
    setShowTranslation(false);
    setCurrentCard(prev => prev + 1);
  };

  return (
    <div className="min-h-screen p-4 flex flex-col">
      <header className="max-w-2xl mx-auto w-full mb-4">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/c6fb0acf-76a6-4bb5-b8e0-c7bfefa1c03a.png" 
            alt="SRSpeak Logo" 
            className="h-8 w-8" 
          />
          <h1 className="text-xl font-semibold">1 de 10</h1>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full">
        <div className="w-full aspect-square bg-card rounded-2xl flex items-center justify-center p-8 mb-8">
          <h2 className="text-5xl font-bold">apple</h2>
        </div>

        {!showTranslation ? (
          <Button 
            className="w-full py-6 text-xl mb-8" 
            onClick={() => setShowTranslation(true)}
          >
            Mostrar resposta
          </Button>
        ) : (
          <div className="w-full space-y-3">
            <p className="text-lg text-center mb-4">Escolha o nível de dificuldade</p>
            
            <Button 
              className="w-full py-6 text-lg bg-red-500 hover:bg-red-600"
              onClick={() => handleDifficulty("nao-lembro")}
            >
              <X className="mr-2" /> Não Lembro
            </Button>
            
            <Button 
              className="w-full py-6 text-lg bg-orange-500 hover:bg-orange-600"
              onClick={() => handleDifficulty("dificil")}
            >
              <Minus className="mr-2" /> Difícil
            </Button>
            
            <Button 
              className="w-full py-6 text-lg bg-green-500 hover:bg-green-600"
              onClick={() => handleDifficulty("facil")}
            >
              <Check className="mr-2" /> Fácil
            </Button>
            
            <Button 
              className="w-full py-6 text-lg bg-emerald-500 hover:bg-emerald-600"
              onClick={() => handleDifficulty("muito-facil")}
            >
              <Check className="mr-2" /> Muito Fácil
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
