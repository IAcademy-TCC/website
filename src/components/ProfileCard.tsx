"use client";

import { useAuth } from "@/app/hooks/useAuth";

export default function ProfileCard() {
  const { perfil } = useAuth();

  const pontos = 34764; // ⚠️ Placeholder — ideal buscar via backend
  const exerciciosResolvidos = 7; // ⚠️ Placeholder
  const trilhasConcluidas = 2; // ⚠️ Placeholder
  const interacoes = 16; // ⚠️ Placeholder

  const nome = perfil?.nome || "Usuário";

  const letra = perfil?.nome?.charAt(0).toUpperCase() || "?";

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-xs text-center flex flex-col items-center gap-4">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full bg-dark-blue text-white text-2xl flex items-center justify-center font-bold shadow">
        {letra}
      </div>

      <p className="text-lg font-semibold text-zinc-700">Olá, {nome}!</p>

      {/* Pontuação */}
      <p className="text-lg text-zinc-600">
        Você tem <span className="text-blue-600 font-semibold">{pontos.toLocaleString()}</span> pontos
      </p>

      {/* Estatísticas */}
      <div className="flex justify-around w-full mt-2 text-blue-600 font-semibold text-sm">
        <div className="flex flex-col items-center">
          <span className="text-xl">{exerciciosResolvidos.toString().padStart(2, "0")}</span>
          <span className="text-xs text-zinc-500 font-medium">Exercícios<br />Resolvidos</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl">{trilhasConcluidas.toString().padStart(2, "0")}</span>
          <span className="text-xs text-zinc-500 font-medium">Trilhas<br />Concluídas</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl">{interacoes.toString().padStart(2, "0")}</span>
          <span className="text-xs text-zinc-500 font-medium">Interações</span>
        </div>
      </div>
    </div>
  );
}
