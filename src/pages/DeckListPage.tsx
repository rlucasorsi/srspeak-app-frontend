
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
    title: "Frutas",
    decks: [{ id: "1", title: "Frutas básicas", cardCount: 20 }],
  },
  {
    id: "2",
    title: "Animais",
    decks: [{ id: "2", title: "Animais domésticos", cardCount: 35 }],
  },
  {
    id: "3", 
    title: "Viagem",
    decks: [{ id: "3", title: "Frases úteis", cardCount: 18 }],
  },
  {
    id: "4",
    title: "Comida",
    decks: [{ id: "4", title: "Restaurante", cardCount: 26 }],
  },
];

export default function DeckListPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <img src="/placeholder.svg" alt="BRSpeak Logo" className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Baralhos</h1>
          </div>
        </header>

        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.id} className="space-y-2">
              {category.decks.map((deck) => (
                <button
                  key={deck.id}
                  onClick={() => navigate(`/decks/${deck.id}`)}
                  className="w-full p-4 bg-card rounded-xl flex items-center justify-between card-hover"
                >
                  <div className="text-left">
                    <h3 className="font-medium">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {deck.cardCount} cards
                    </p>
                  </div>
                  <ChevronRight className="text-muted-foreground" />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
