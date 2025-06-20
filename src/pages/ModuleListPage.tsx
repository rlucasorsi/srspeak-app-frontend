import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Users, ArrowLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Placeholder data for modules
const mockModules = [
  {
    id: 1,
    name: "Todos os cards",
    description: "Módulo principal com todas as cartas",
    category: "Principal",
    cardCount: 240,
  },
  {
    id: 2,
    name: "Viagem",
    description: "Frases úteis para viagens",
    category: "Conversação",
    cardCount: 45,
  },
  {
    id: 3,
    name: "Tecnologia",
    description: "Vocabulário técnico de TI",
    category: "Profissional",
    cardCount: 78,
  },
  {
    id: 4,
    name: "Animais",
    description: "Nomes de animais e expressões relacionadas",
    category: "Vocabulário",
    cardCount: 32,
  },
];

export default function ModuleListPage() {
  const navigate = useNavigate();
  const [modules] = useState(mockModules);

  return (
    <div className="min-h-screen p-4">
      <header className="max-w-4xl mx-auto w-full mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="SRSpeak Logo.png" alt="SRSpeak Logo" className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Gerenciamento de Módulos</h1>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/decks")}
          className="text-muted-foreground"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </header>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4">
          <Button className="mr-2" onClick={() => navigate("/modules/new")}>
            <Plus className="h-4 w-4 mr-2" />
            Criar novo módulo
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {modules.map((module) => (
            <Card key={module.id} className="card-hover">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{module.name}</CardTitle>
                    <CardDescription>{module.category}</CardDescription>
                  </div>
                  <div className="bg-secondary rounded-full px-2 py-1 text-xs font-medium">
                    {module.cardCount} cards
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground">
                  {module.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-end pt-0">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(`/modules/${module.id}/edit`)}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Editar
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(`/modules/${module.id}/students`)}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Alunos
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
