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
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-2lg text-center flex flex-col items-center gap-4">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full bg-dark-blue text-white text-2xl flex items-center justify-center font-bold shadow">
        {letra}
      </div>

      <p className="text-2xl font-semibold text-dark-grey">Olá, {nome}!</p>

      {/* Pontuação */}
      <p className="text-xl text-dark-grey">
        Você tem <span className="text-normal-blue font-semibold">{pontos.toLocaleString()}</span> pontos
      </p>

      {/* Estatísticas */}
      <div className="flex justify-around w-full mt-5 text-normal-blue font-semibold text-sm">
        <div className="flex flex-col items-center">
          <span className="text-3xl">{exerciciosResolvidos.toString().padStart(2, "0")}</span>
          <span className="text-base text-normal-grey font-medium">Exercícios<br />Resolvidos</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl">{trilhasConcluidas.toString().padStart(2, "0")}</span>
          <span className="text-base text-normal-grey font-medium">Trilhas<br />Concluídas</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl">{interacoes.toString().padStart(2, "0")}</span>
          <span className="text-base text-normal-grey font-medium">Interações</span>
        </div>
      </div>
      <div>
        <a href="/perfil" className="text-normal-blue">Ir para o perfil completo</a>
      </div>
    </div>
  );
}
