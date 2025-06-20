
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

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
      <Card className="glass-card p-8 w-full max-w-md shadow-lg">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Parabéns! 🎉</h1>
            <p className="text-gray-700 text-lg">
              Você completou a revisão de {totalCards} cards
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-green-500/20 p-4 rounded-lg">
              <div className="font-semibold text-2xl text-green-700">{stats.veryEasy}</div>
              <div className="text-sm text-gray-800">Muito Fácil</div>
            </div>
            <div className="bg-emerald-500/20 p-4 rounded-lg">
              <div className="font-semibold text-2xl text-emerald-700">{stats.easy}</div>
              <div className="text-sm text-gray-800">Fácil</div>
            </div>
            <div className="bg-orange-500/20 p-4 rounded-lg">
              <div className="font-semibold text-2xl text-orange-700">{stats.hard}</div>
              <div className="text-sm text-gray-800">Difícil</div>
            </div>
            <div className="bg-red-500/20 p-4 rounded-lg">
              <div className="font-semibold text-2xl text-red-700">{stats.forgot}</div>
              <div className="text-sm text-gray-800">Não lembro</div>
            </div>
          </div>
        </div>
      </Card>

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
