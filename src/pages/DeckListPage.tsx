import { useState } from "react";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Deck {
  id: string;
  title: string;
  cardCount: number;
}

interface DeckCategory {
  id: string;
  title: string;
  decks: Deck[];
}

const categories: DeckCategory[] = [
  {
    id: "1",
    title: "Principal",
    decks: [{ id: "1", title: "Todos os cards", cardCount: 100 }],
  },
  {
    id: "2",
    title: "Gramática",
    decks: [
      { id: "2", title: "Verb To Be", cardCount: 20 },
      { id: "3", title: "Simple Present", cardCount: 25 },
      { id: "4", title: "Simple Past", cardCount: 30 },
      { id: "5", title: "Present Continuous", cardCount: 15 },
      { id: "6", title: "Future Tense", cardCount: 20 },
      { id: "7", title: "Pronomes e Artigos", cardCount: 25 },
    ],
  },
];

export default function DeckListPage() {
  const navigate = useNavigate();
  const [showAllModules, setShowAllModules] = useState(false);
  const mainDeck = categories[0].decks[0];
  const otherCategories = categories.slice(1);

  return (
    <div className="min-h-screen p-4 bg-background" data-cy="deck-list-page">
      <div className="max-w-2xl mx-auto space-y-6">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <img
              src="SRSpeak Logo.png"
              alt="SRSpeak Logo"
              className="h-12 w-12"
              data-cy="deck-list-logo"
            />
            <h1
              className="text-2xl font-bold text-gray-900"
              data-cy="deck-list-title"
            >
              Meu baralho
            </h1>
          </div>
        </header>

        <div className="space-y-2">
          <button
            onClick={() => navigate(`/decks/${mainDeck.id}`)}
            className="w-full p-6 glass-card flex items-center justify-between card-hover"
            data-cy="main-deck-button"
          >
            <div className="text-left">
              <h3
                className="text-lg font-semibold text-gray-900"
                data-cy="main-deck-title"
              >
                {mainDeck.title}
              </h3>
              <p className="text-sm text-gray-700" data-cy="main-deck-count">
                {mainDeck.cardCount} cards
              </p>
            </div>
            <ChevronRight className="text-primary" />
          </button>
        </div>

        <Button
          variant="outline"
          className="w-full bg-white text-gray-900 hover:bg-white/90"
          onClick={() => setShowAllModules(!showAllModules)}
          data-cy="toggle-modules-button"
        >
          <span>
            {showAllModules ? "Ocultar módulos" : "Exibir todos os módulos"}
          </span>
          {showAllModules ? (
            <ChevronUp className="ml-2" />
          ) : (
            <ChevronDown className="ml-2" />
          )}
        </Button>

        {showAllModules && (
          <ScrollArea
            className="h-[400px] rounded-md bg-white border"
            data-cy="modules-scroll-area"
          >
            <div className="p-4 space-y-6">
              {otherCategories.map((category) => (
                <div
                  key={category.id}
                  className="space-y-3"
                  data-cy={`category-${category.id}`}
                >
                  <h2
                    className="text-xl font-semibold text-gray-900"
                    data-cy={`category-title-${category.id}`}
                  >
                    {category.title}
                  </h2>
                  <div className="space-y-2">
                    {category.decks.map((deck) => (
                      <button
                        key={deck.id}
                        onClick={() => navigate(`/decks/${deck.id}`)}
                        className="w-full p-4 glass-card flex items-center justify-between card-hover"
                        data-cy={`deck-button-${deck.id}`}
                      >
                        <div className="text-left">
                          <h3
                            className="font-medium text-gray-900"
                            data-cy={`deck-title-${deck.id}`}
                          >
                            {deck.title}
                          </h3>
                          <p
                            className="text-sm text-gray-700"
                            data-cy={`deck-count-${deck.id}`}
                          >
                            {deck.cardCount} cards
                          </p>
                        </div>
                        <ChevronRight className="text-primary" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </div>
    </div>
  );
}
