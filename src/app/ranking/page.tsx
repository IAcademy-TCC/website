"use client";
import { useState, useEffect } from "react";
import TopBar from "@/components/TopBar";
import RankingHeader from "@/components/RankingHeader";
import RankingTabs from "@/components/RankingTabs";
import RankingStats from "@/components/RankingStats";
import RankingAlunos from "@/components/RankingAlunos";
import RankingFaculdades from "@/components/RankingFaculdades";
import { rankingService } from "../../../service/RankingService";

export default function RankingPage() {
  const [tab, setTab] = useState("alunos");
  const [periodo, setPeriodo] = useState("mensal");

  const [dadosAlunos, setDadosAlunos] = useState<any[]>([]);
  const [dadosFaculdades, setDadosFaculdades] = useState<any[]>([]);

  // 🔵 Carregar ranking de alunos
  async function carregarAlunos() {
    try {
      const res = await rankingService.getRankingGeral();

      setDadosAlunos(
        res.data.ranking.map((item: any, index: number) => ({
          posicao: index + 1,
          nome: item.nome,
          instituicao: item.instituicoes?.nome || "-",
          pontos: item.pontuacao,
          exerciciosConcluidos: item.exerciciosConcluidos || 0,
          interacoes: item.interacoes || 0,
        }))
      );
    } catch (err) {
      console.error("Erro ao buscar ranking geral:", err);
    }
  }

  // 🟣 Carregar ranking de faculdades
  async function carregarFaculdades() {
    try {
      const res = await rankingService.getRankingInstituicao();

      setDadosFaculdades(
        res.data.ranking.map((item: any, index: number) => ({
          posicao: index + 1,
          nome: item.nome,
          instituicao: item.nome,
          pontos: item.pontos_totais,
          trilhas: item.total_trilhas,
          interacoes: item.total_interacoes,
        }))
      );
    } catch (err) {
      console.error("Erro ao buscar ranking faculdades:", err);
    }
  }

  // 🟠 Recarregar quando mudar TAB ou PERÍODO
  useEffect(() => {
    if (tab === "alunos") carregarAlunos();
    if (tab === "faculdades") carregarFaculdades();
  }, [tab, periodo]);

  return (
    <>
      <TopBar />

      <main className="px-10 py-10 bg-gradient-to-br bg-light-grey min-h-screen">

        <RankingHeader onPeriodoChange={setPeriodo} />

        <RankingTabs onTabChange={setTab} />

        {/* Apenas aparece na aba ALUNOS */}
        <RankingStats />

        {/* Renderização dinâmica */}
        {tab === "alunos" && <RankingAlunos data={dadosAlunos} />}
        {tab === "faculdades" && <RankingFaculdades data={dadosFaculdades} />}

      </main>
    </>
  );
}
