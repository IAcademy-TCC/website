"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { JornadaService } from "../../../service/JornadaService";
import ProfileCard from "@/components/ProfileCard";
import TopBar from "@/components/TopBar";
import TrilhaProgresso from "@/components/TrilhaProgresso";
import Recomendacoes from "@/components/Recomendacoes";
import TopInstituicoes from "@/components/TopInstituicoes";
import ComunidadesCard from "@/components/ComunidadesCard";

export default function DashboardPage() {
  const [jornada, setJornada] = useState<{ id: number; nome: string; descricao: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchJornada = async () => {
      try {
        const service = new JornadaService();
        const response = await service.obterJornadaPorId(1); // Altere o ID conforme necessário
        setJornada({
          id: response.data.id,
          nome: response.data.nome,
          descricao: response.data.descricao,
        });
      } catch (error) {
        console.error("Erro ao buscar jornada:", error);
      }
    };

    fetchJornada();
  }, []);

  return (
    <>
    <TopBar />
      <main className="px-10 py-8 bg-gradient-to-br bg-light-grey min-h-screen">
        <div className="grid grid-cols-12 gap-6">
          {/* COLUNA ESQUERDA */}
          <div className="col-span-3 space-y-6">
            <ProfileCard />
            <TrilhaProgresso />
          </div>
        <div className="col-span-6 space-y-6">
          {jornada ? (
            <section
              onClick={() => router.push(`/jornada/${jornada.id}`)}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg cursor-pointer transition-all duration-200"
            >
              <h1 className="text-2xl font-bold text-zinc-800 mb-2">{jornada.nome}</h1>
              <p className="text-zinc-600 text-lg">{jornada.descricao}</p>
            </section>
          ) : (
            <p>Carregando jornada...</p>
          )}

          <Recomendacoes />
        </div>
        {/* COLUNA DIREITA */}
        <div className="col-span-3 space-y-6">
            <TopInstituicoes />
            <ComunidadesCard />
          </div>
        </div>
      </main>
    </>
  );
}
