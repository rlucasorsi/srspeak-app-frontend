
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";

export default function CardViewPage() {
  const { deckId } = useParams();
  const [currentCard, setCurrentCard] = useState(1);
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <div className="min-h-screen p-4 flex flex-col">
      <header className="max-w-2xl mx-auto w-full mb-4">
        <div className="flex items-center gap-2">
          <img src="/placeholder.svg" alt="SRSpeak Logo" className="h-8 w-8" />
          <h1 className="text-xl font-semibold">1 de 10</h1>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full">
        <div className="w-full aspect-square bg-card rounded-2xl flex items-center justify-center p-8 mb-8">
          <h2 className="text-5xl font-bold">apple</h2>
        </div>

        <p className="text-lg text-center mb-8">
          Pratique seu vocabulário de inglês com repetição espaçada
        </p>

        <Button 
          className="w-full py-6 text-xl" 
          onClick={() => setShowTranslation(!showTranslation)}
        >
          Começar
        </Button>
      </div>
    </div>
  );
}
