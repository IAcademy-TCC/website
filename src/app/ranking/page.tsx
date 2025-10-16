"use client";
import { useState, useEffect } from "react";
import TopBar from "@/components/TopBar";
import RankingHeader from "@/components/RankingHeader";
import RankingTabs from "@/components/RankingTabs";
import RankingTable from "@/components/RankingTable";

export default function RankingPage() {
  const [tab, setTab] = useState("alunos");
  const [periodo, setPeriodo] = useState("mensal");
  const [dados, setDados] = useState<any[]>([]);

  useEffect(() => {
    // Dados fictícios (poderiam vir do Supabase futuramente)
    const alunos = [
      { posicao: 1, nome: "Thiago Gerbi", instituicao: "FATEC SCS", pontos: 34764, trilhas: 5, interacoes: 16 },
      { posicao: 2, nome: "Ana Souza", instituicao: "ETEC Lauro Gomes", pontos: 31020, trilhas: 4, interacoes: 10 },
      { posicao: 3, nome: "Lucas Pereira", instituicao: "FATEC Mauá", pontos: 29000, trilhas: 3, interacoes: 9 },
    ];

    const faculdades = [
      { posicao: 1, nome: "FATEC São Caetano do Sul", pontos: 187432, trilhas: 112, interacoes: 780 },
      { posicao: 2, nome: "ETEC Lauro Gomes", pontos: 165321, trilhas: 98, interacoes: 645 },
      { posicao: 3, nome: "FATEC Mauá", pontos: 154009, trilhas: 83, interacoes: 520 },
    ];

    setDados(tab === "alunos" ? alunos : faculdades);
  }, [tab, periodo]);

  return (
    <>
      <TopBar />
      <main className="px-10 py-10 bg-gradient-to-br from-white to-[#f6f8fa] min-h-screen">
        <RankingHeader onPeriodoChange={setPeriodo} />
        <RankingTabs onTabChange={setTab} />
        <RankingTable data={dados} />
      </main>
    </>
  );
}
