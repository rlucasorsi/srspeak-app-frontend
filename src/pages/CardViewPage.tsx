
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, SmilePlus, Smile, Meh, Frown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCards } from "@/hooks/api/useCards";
import { Spinner } from "@/components/ui/spinner";
import { StudyCompleteScreen } from "@/components/StudyCompleteScreen";

export default function CardViewPage() {
  const { deckId } = useParams();
  const navigate = useNavigate();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [reviewOriginal, setReviewOriginal] = useState(false);
  const [stats, setStats] = useState({
    veryEasy: 0,
    easy: 0,
    hard: 0,
    forgot: 0
  });
  const isMobile = useIsMobile();

  const { data: cards, isLoading } = useCards(deckId || '');

  const totalCards = cards?.length || 0;
  const isStudyComplete = currentCardIndex >= totalCards && totalCards > 0;
  const currentCard = cards?.[currentCardIndex];

  const handleDifficulty = (difficulty: string) => {
    setShowTranslation(false);
    setReviewOriginal(false);
    
    setStats(prev => {
      switch (difficulty) {
        case "muito-facil":
          return { ...prev, veryEasy: prev.veryEasy + 1 };
        case "facil":
          return { ...prev, easy: prev.easy + 1 };
        case "dificil":
          return { ...prev, hard: prev.hard + 1 };
        case "nao-lembro":
          return { ...prev, forgot: prev.forgot + 1 };
        default:
          return prev;
      }
    });

    if (currentCardIndex < (totalCards - 1)) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      // Ensure we set the index beyond the last card to trigger completion screen
      setCurrentCardIndex(totalCards);
    }
  };

  // Show loading screen while fetching cards
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size={32} className="text-primary" />
      </div>
    );
  }

  // Show message if no cards found
  if (!cards || cards.length === 0) {
    return <div className="min-h-screen flex items-center justify-center">No cards found</div>;
  }

  // Show completion screen when all cards are reviewed
  if (isStudyComplete) {
    return <StudyCompleteScreen stats={stats} />;
  }

  const difficultyButtons = [
    { label: "Muito Fácil", value: "muito-facil", icon: <SmilePlus className="h-6 w-6" />, color: "bg-green-500 hover:bg-green-600 hover:shadow-lg hover:-translate-y-0.5 transition-all" },
    { label: "Fácil", value: "facil", icon: <Smile className="h-6 w-6" />, color: "bg-emerald-500 hover:bg-emerald-600 hover:shadow-lg hover:-translate-y-0.5 transition-all" },
    { label: "Difícil", value: "dificil", icon: <Meh className="h-6 w-6" />, color: "bg-orange-500 hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all" },
    { label: "Não lembro", value: "nao-lembro", icon: <Frown className="h-6 w-6" />, color: "bg-red-500 hover:bg-red-600 hover:shadow-lg hover:-translate-y-0.5 transition-all" },
  ];

  return (
    <div className="min-h-screen p-4 flex flex-col bg-background" data-cy="card-view-container">
      <header className="max-w-2xl mx-auto w-full mb-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <img 
              src="SRSpeak Logo.png" 
              alt="SRSpeak Logo" 
              className="h-8 w-8"
              data-cy="logo-image"
            />
            <h1 className="text-xl font-semibold text-white" data-cy="card-progress">
              {currentCardIndex + 1} de {totalCards}
            </h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/decks")}
            className="text-white hover:text-white/80"
            data-cy="back-button"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full gap-4">
        <div className="w-full aspect-video sm:aspect-[4/3] glass-card flex items-center justify-center p-8 relative overflow-hidden shadow-lg" data-cy="flashcard-container">
          <div 
            className={`w-full h-full absolute transition-transform duration-500 flex items-center justify-center ${
              showTranslation && !reviewOriginal
                ? '-translate-y-full' 
                : 'translate-y-0'
            }`}
            data-cy="card-front"
          >
            <div className="w-full flex items-center justify-center text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 w-full" data-cy="english-text">
                {currentCard.english}
              </h2>
            </div>
          </div>
          <div 
            className={`w-full h-full absolute transition-transform duration-500 flex items-center justify-center ${
              showTranslation && !reviewOriginal
                ? 'translate-y-0' 
                : 'translate-y-full'
            }`}
            data-cy="card-back"
          >
            <div className="w-full flex items-center justify-center text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 w-full" data-cy="portuguese-text">
                {currentCard.portuguese}
              </h2>
            </div>
          </div>
        </div>

        {!showTranslation ? (
          <Button 
            className="w-full py-6 text-lg"
            onClick={() => setShowTranslation(true)}
            data-cy="show-translation-button"
          >
            Mostrar resposta
          </Button>
        ) : (
          <div className="w-full flex flex-col gap-4" data-cy="difficulty-controls">
            <Button
              variant="link"
              className="text-muted-foreground text-sm"
              onClick={() => setReviewOriginal(prev => !prev)}
              data-cy="toggle-review-button"
            >
              {reviewOriginal ? "Ver tradução" : "Rever frase em inglês"}
            </Button>

            <div className="w-full grid grid-cols-2 gap-3">
              {difficultyButtons.map((btn) => (
                <Button 
                  key={btn.label}
                  className={`${btn.color} rounded-xl flex items-center justify-center gap-2 p-4`}
                  onClick={() => handleDifficulty(btn.value)}
                  data-cy={`difficulty-button-${btn.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {btn.icon}
                  {!isMobile && <span>{btn.label}</span>}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
