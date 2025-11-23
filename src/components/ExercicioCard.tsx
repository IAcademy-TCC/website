import { FileText, Zap, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { exercicioService } from "../../service/ExercicioService";

interface ExercicioCardProps {
  exercicio: {
    id: number;
    unidade_id: number;
    enunciado: string;
  };
}

export default function ExercicioCard({ exercicio }: ExercicioCardProps) {
  const [status, setStatus] = useState<{
    concluido: boolean;
    pontos: number;
    data: string | null;
  }>({
    concluido: false,
    pontos: 0,
    data: null,
  });

  useEffect(() => {
    async function carregarStatus() {
      try {
        const { data } = await exercicioService.obterStatusExercicio(exercicio.id);
        setStatus(data);
      } catch (err) {
        console.error("Erro ao carregar status do exercício:", err);
      }
    }

    carregarStatus();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 mt-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <Zap className="w-6 h-6 text-normal-blue" />
          <h2 className="text-2xl font-bold text-dark-blue">
            Exercício #{exercicio.id}
          </h2>
        </div>

        {status.concluido && (
          <div className="flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            <CheckCircle className="w-4 h-4" />
            <span>Concluído</span>
          </div>
        )}
      </div>

      <p className="text-gray-700 mb-4 font-semibold">{exercicio.enunciado}</p>

      {status.concluido && (
        <div className="mb-4 text-sm text-gray-600">
          <p>
            <span className="font-bold">Pontos recebidos:</span>{" "}
            {status.pontos}
          </p>
          <p>
            <span className="font-bold">Data:</span>{" "}
            {new Date(status.data!).toLocaleDateString("pt-BR")}
          </p>
        </div>
      )}

      <a
        href={`/exercicio/${exercicio.id}?unidade=${exercicio.unidade_id}`}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-normal-blue hover:bg-dark-blue transition duration-150"
      >
        <FileText className="w-4 h-4 mr-2" />
        {status.concluido ? "Refazer" : "Iniciar Avaliação"}
      </a>
    </div>
  );
}
