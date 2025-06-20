import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for edit mode
const mockModule = {
  id: 2,
  name: "Viagem",
  description: "Frases úteis para viagens",
  category: "Conversação",
  cards: [
    {
      id: 1,
      english: "Where is the bathroom?",
      portuguese: "Onde fica o banheiro?",
      difficulty: "easy",
    },
    {
      id: 2,
      english: "I would like to order, please.",
      portuguese: "Eu gostaria de fazer o pedido, por favor.",
      difficulty: "medium",
    },
    {
      id: 3,
      english: "How much does it cost?",
      portuguese: "Quanto custa?",
      difficulty: "easy",
    },
  ],
};

// Difficulty options
const difficultyOptions = [
  { value: "very_easy", label: "Muito Fácil" },
  { value: "easy", label: "Fácil" },
  { value: "medium", label: "Médio" },
  { value: "hard", label: "Difícil" },
];

type Card = {
  id: number;
  english: string;
  portuguese: string;
  difficulty: string;
};

export default function ModuleFormPage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const isEditMode = moduleId !== "new" && moduleId !== undefined;

  const [name, setName] = useState(isEditMode ? mockModule.name : "");
  const [category, setCategory] = useState(
    isEditMode ? mockModule.category : ""
  );
  const [description, setDescription] = useState(
    isEditMode ? mockModule.description : ""
  );
  const [cards, setCards] = useState<Card[]>(
    isEditMode ? mockModule.cards : []
  );
  const [newCard, setNewCard] = useState<Partial<Card>>({
    english: "",
    portuguese: "",
    difficulty: "medium",
  });

  const handleAddCard = () => {
    if (newCard.english && newCard.portuguese) {
      setCards([
        ...cards,
        {
          id: Date.now(),
          english: newCard.english,
          portuguese: newCard.portuguese,
          difficulty: newCard.difficulty || "medium",
        },
      ]);
      setNewCard({
        english: "",
        portuguese: "",
        difficulty: "medium",
      });
    }
  };

  const handleRemoveCard = (cardId: number) => {
    setCards(cards.filter((card) => card.id !== cardId));
  };

  const handleSaveModule = () => {
    // In a real app, this would save to a database
    console.log("Saving module:", { name, category, description, cards });
    navigate("/modules");
  };

  return (
    <div className="min-h-screen p-4">
      <header className="max-w-4xl mx-auto w-full mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="SRSpeak Logo.png" alt="SRSpeak Logo" className="h-8 w-8" />
          <h1 className="text-2xl font-bold">
            {isEditMode ? "Editar Módulo" : "Criar Novo Módulo"}
          </h1>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/modules")}
          className="text-muted-foreground"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </header>

      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Informações do Módulo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Nome do módulo *</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite o nome do módulo"
                required
              />
            </div>

            <div>
              <Label htmlFor="category">Categoria (opcional)</Label>
              <Input
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Ex: Vocabulário, Gramática, Conversação..."
              />
            </div>

            <div>
              <Label htmlFor="description">Descrição (opcional)</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descreva o conteúdo deste módulo..."
                className="resize-none h-24"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Cards do Módulo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="p-4 border rounded-lg flex flex-col gap-3"
                >
                  <div className="flex justify-between">
                    <Label>Frase em Inglês</Label>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive h-6 w-6 p-0"
                      onClick={() => handleRemoveCard(card.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="font-medium">{card.english}</div>

                  <Label>Tradução em Português</Label>
                  <div className="font-medium">{card.portuguese}</div>

                  <div className="flex items-center gap-2">
                    <Label>Dificuldade:</Label>
                    <span className="text-sm font-medium">
                      {difficultyOptions.find(
                        (opt) => opt.value === card.difficulty
                      )?.label || card.difficulty}
                    </span>
                  </div>
                </div>
              ))}

              <div className="border-t pt-4 mt-4">
                <h3 className="font-medium mb-4">Adicionar novo card</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="english">Frase em Inglês *</Label>
                    <Input
                      id="english"
                      value={newCard.english}
                      onChange={(e) =>
                        setNewCard({ ...newCard, english: e.target.value })
                      }
                      placeholder="Digite a frase em inglês"
                    />
                  </div>

                  <div>
                    <Label htmlFor="portuguese">Tradução em Português *</Label>
                    <Input
                      id="portuguese"
                      value={newCard.portuguese}
                      onChange={(e) =>
                        setNewCard({ ...newCard, portuguese: e.target.value })
                      }
                      placeholder="Digite a tradução em português"
                    />
                  </div>

                  <div>
                    <Label htmlFor="difficulty">Dificuldade</Label>
                    <Select
                      value={newCard.difficulty}
                      onValueChange={(value) =>
                        setNewCard({ ...newCard, difficulty: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a dificuldade" />
                      </SelectTrigger>
                      <SelectContent>
                        {difficultyOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    onClick={handleAddCard}
                    disabled={!newCard.english || !newCard.portuguese}
                    className="w-full"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Card
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end border-t pt-4">
            <Button
              variant="outline"
              className="mr-2"
              onClick={() => navigate("/modules")}
            >
              Cancelar
            </Button>
            <Button
              onClick={handleSaveModule}
              disabled={!name || cards.length === 0}
            >
              {isEditMode ? "Salvar Alterações" : "Criar Módulo"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
