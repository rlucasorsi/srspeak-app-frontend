import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-background bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent)]"
      data-cy="welcome-page"
    >
      <div className="w-full max-w-md space-y-8">
        <div className="glass-card p-8 rounded-2xl space-y-6">
          <div className="flex flex-col items-center">
            <img
              src="SRSpeak Logo.png"
              alt="SRSpeak Logo"
              className="h-32 w-32 mb-4"
              data-cy="welcome-logo"
            />
            <h1
              className="text-2xl font-semibold text-gray-900 mb-2"
              data-cy="welcome-title"
            >
              Bem-vindo ao SRSpeak
            </h1>
            <p
              className="text-lg text-center text-gray-700 mb-8"
              data-cy="welcome-description"
            >
              Pratique seu vocabulário em inglês com repetição espaçada
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div
              className="glass-card p-4 rounded-xl"
              data-cy="today-cards-container"
            >
              <div className="flex items-center gap-2">
                <Clock className="text-[#00A5A5]" />
                <div>
                  <p className="text-sm text-gray-700">Cards para hoje</p>
                  <p
                    className="text-2xl font-bold text-gray-900"
                    data-cy="today-cards-count"
                  >
                    15
                  </p>
                </div>
              </div>
            </div>

            <div
              className="glass-card p-4 rounded-xl"
              data-cy="streak-container"
            >
              <div className="flex items-center gap-2">
                <Calendar className="text-[#00A5A5]" />
                <div>
                  <p className="text-sm text-gray-700">Dias seguidos</p>
                  <p
                    className="text-2xl font-bold text-gray-900"
                    data-cy="streak-count"
                  >
                    3
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={() => navigate("/decks")}
            className="w-full py-6 text-lg bg-[#00A5A5] hover:bg-[#008585]"
            data-cy="start-button"
          >
            Começar agora
          </Button>
        </div>
      </div>
    </div>
  );
}
