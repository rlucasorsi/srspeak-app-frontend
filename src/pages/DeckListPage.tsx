
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="min-h-screen p-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/c6fb0acf-76a6-4bb5-b8e0-c7bfefa1c03a.png" 
              alt="SRSpeak Logo" 
              className="h-12 w-12" 
            />
            <h1 className="text-2xl font-bold">Escolha um baralho para estudar</h1>
          </div>
        </header>

        <div className="space-y-6">
          {categories.map((category) => (
            <div key={category.id} className="space-y-3">
              <h2 className="text-xl font-semibold">{category.title}</h2>
              <div className="space-y-2">
                {category.decks.map((deck) => (
                  <button
                    key={deck.id}
                    onClick={() => navigate(`/decks/${deck.id}`)}
                    className="w-full p-4 bg-card rounded-xl flex items-center justify-between card-hover border border-border"
                  >
                    <div className="text-left">
                      <h3 className="font-medium">{deck.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {deck.cardCount} cards
                      </p>
                    </div>
                    <ChevronRight className="text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
