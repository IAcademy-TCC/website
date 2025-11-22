"use client";

import { Star, Award, Zap } from "lucide-react";
import Pontos from "./Pontos";

export default function RankingStats() {
  const aluno = {
    nome: "Thiago Gerbi",
    instituicao: "FATEC São Caetano do Sul",
    pontos: 34764,
    trilhasConcluidas: 5,
    interacoes: 16,
    posicao: 146,
  };

  const fatec = {
    nome: "FATEC São Caetano do Sul",
    posicao: 1,
    pontos: 187432,
    alunosAtivos: 312,
    mediaTrilhas: 4.2,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      {/* Card do Aluno */}
      <div className="bg-white rounded-2xl shadow-md border border-zinc-200 p-6 flex flex-col gap-3">
        <h2 className="text-xl font-bold text-normal-blue flex items-center gap-2">
          <Award className="text-yellow-500" /> Seu Desempenho
        </h2>
        <p className="text-lg text-zinc-700 font-medium">{aluno.nome}</p>
        <p className="text-sm text-zinc-500 mb-3">{aluno.instituicao}</p>

        <div className="grid grid-cols-3 text-center">
          <div>
            <Pontos />
            <p className="text-xs text-zinc-500">Pontos</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-normal-blue">{aluno.trilhasConcluidas}</p>
            <p className="text-xs text-zinc-500">Trilhas</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-normal-blue">{aluno.interacoes}</p>
            <p className="text-xs text-zinc-500">Interações</p>
          </div>
        </div>

        <div className="mt-3 flex justify-center text-sm">
          <p className="bg-light-blue px-4 py-2 rounded-lg font-medium text-zinc-700">
            Posição atual: <span className="text-normal-blue font-bold">#{aluno.posicao}</span>
          </p>
        </div>
      </div>

      {/* Card da FATEC */}
      <div className="bg-white rounded-2xl shadow-md border border-zinc-200 p-6 flex flex-col gap-3">
        <h2 className="text-xl font-bold text-dark-blue flex items-center gap-2">
          <Star className="text-yellow-400" /> Sua Instituição
        </h2>
        <p className="text-lg text-zinc-700 font-medium">{fatec.nome}</p>
        <p className="text-sm text-zinc-500 mb-3">Posição #{fatec.posicao} no Ranking Geral</p>

        <div className="grid grid-cols-3 text-center">
          <div>
            <p className="text-2xl font-bold text-dark-blue">{fatec.pontos.toLocaleString()}</p>
            <p className="text-xs text-zinc-500">Pontos Totais</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-dark-blue">{fatec.alunosAtivos}</p>
            <p className="text-xs text-zinc-500">Alunos Ativos</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-dark-blue">{fatec.mediaTrilhas}</p>
            <p className="text-xs text-zinc-500">Média Trilhas</p>
          </div>
        </div>

        <div className="mt-3 flex justify-center text-sm">
          <p className="bg-light-blue px-4 py-2 rounded-lg font-medium text-zinc-700 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" /> Destaque no mês!
          </p>
        </div>
      </div>
    </div>
  );
}
