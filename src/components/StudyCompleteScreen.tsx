
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface StudyStats {
  veryEasy: number;
  easy: number;
  hard: number;
  forgot: number;
}

interface StudyCompleteScreenProps {
  stats: StudyStats;
}

export function StudyCompleteScreen({ stats }: StudyCompleteScreenProps) {
  const navigate = useNavigate();
  const totalCards = stats.veryEasy + stats.easy + stats.hard + stats.forgot;

  console.log("Rendering StudyCompleteScreen with stats:", stats);

  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center text-center gap-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Parabéns! 🎉</h1>
        <p className="text-muted-foreground text-lg">
          Você completou a revisão de {totalCards} cards
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <div className="bg-green-500/10 p-4 rounded-lg">
          <div className="font-semibold text-2xl text-green-500">{stats.veryEasy}</div>
          <div className="text-sm text-muted-foreground">Muito Fácil</div>
        </div>
        <div className="bg-emerald-500/10 p-4 rounded-lg">
          <div className="font-semibold text-2xl text-emerald-500">{stats.easy}</div>
          <div className="text-sm text-muted-foreground">Fácil</div>
        </div>
        <div className="bg-orange-500/10 p-4 rounded-lg">
          <div className="font-semibold text-2xl text-orange-500">{stats.hard}</div>
          <div className="text-sm text-muted-foreground">Difícil</div>
        </div>
        <div className="bg-red-500/10 p-4 rounded-lg">
          <div className="font-semibold text-2xl text-red-500">{stats.forgot}</div>
          <div className="text-sm text-muted-foreground">Não lembro</div>
        </div>
      </div>

      <Button
        onClick={() => navigate("/decks")}
        className="gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para baralhos
      </Button>
    </div>
  );
}
