// ExercicioCard.tsx
import { FileText, Zap } from "lucide-react";

interface ExercicioCardProps {
  exercicio: {
    id: number;
    unidade_id: number;
    enunciado: string; // Corresponde à sua coluna 'enunciado'
    // Outros campos como 'alternativas' e 'resposta_correta' podem ser adicionados se for necessário exibi-los
  };
}

export default function ExercicioCard({ exercicio }: ExercicioCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 mt-6">
      <div className="flex items-center space-x-3 mb-3">
        <Zap className="w-6 h-6 text-normal-blue" />
        <h2 className="text-2xl font-bold text-dark-blue">
          Exercício #{exercicio.id}
        </h2>
      </div>

      <p className="text-gray-700 mb-4 font-semibold">{exercicio.enunciado}</p>

      {/* Este link pode levar a uma rota de resolução de exercício ou abrir um modal */}
      <a
        href={`/exercicio/${exercicio.id}?unidade=${exercicio.unidade_id}`}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-normal-blue hover:bg-dark-blue transition duration-150"
      >
        <FileText className="w-4 h-4 mr-2" />
        Iniciar Avaliação
      </a>
    </div>
  );
}