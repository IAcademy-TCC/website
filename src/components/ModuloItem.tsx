import { useState } from "react";
import { Clock, ChevronDown, ChevronUp } from "lucide-react";

export default function ModuloItem({ modulo, index }: { modulo: any; index: number }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="bg-blue-50 rounded-2xl shadow-md border border-blue-200 overflow-hidden mt-4">
      <button
        onClick={() => setAberto(!aberto)}
        className="w-full flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-blue-100 transition"
      >
        <div className="flex items-center gap-4">
          <div className="bg-blue-700 text-white font-bold text-lg px-4 py-2 rounded-xl shadow">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="text-left">
            <h3 className="text-base font-semibold text-blue-900">{modulo.titulo}</h3>
          </div>
        </div>
        {aberto ? <ChevronUp className="text-blue-700 w-5 h-5" /> : <ChevronDown className="text-blue-700 w-5 h-5" />}
      </button>

      {aberto && (
        <div className="space-y-3 px-6 pb-6">
          {modulo.unidade?.map((unidade: any, i: number) => (
            <div
              key={i}
              className="flex justify-between items-center bg-white px-5 py-4 border border-blue-100 rounded-xl hover:shadow-sm transition"
            >
              <div>
                <p className="text-indigo-600 font-medium">{unidade.titulo}</p>
                <p className="text-xs text-zinc-500">Unidade {i + 1}</p>
              </div>
              <div className="flex items-center gap-1 text-zinc-500 text-sm">
                <Clock className="w-4 h-4" />
                <span>{unidade.duracao || "Indefinida"}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
