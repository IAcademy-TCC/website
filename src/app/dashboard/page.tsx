"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { JornadaService } from "../../../service/JornadaService";
import ProfileCard from "@/components/ProfileCard";
import TopBar from "@/components/TopBar";

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
      <main className="grid grid-cols-4 gap-6 p-8">
        <div className="col-span-1">
          <ProfileCard />
        </div>
        <div className="col-span-3">
          {jornada ? (
            <section
              onClick={() => router.push(`/jornada/${jornada.id}`)}
              className="bg-white w-300 p-6 rounded-xl shadow-md hover:shadow-lg cursor-pointer transition-all duration-200"
            >
              <h1 className="text-3xl font-bold text-zinc-800 mb-2">{jornada.nome}</h1>
              <p className="text-zinc-600">{jornada.descricao}</p>
            </section>
          ) : (
            <p>Carregando jornada...</p>
          )}
        </div>
      </main>
    </>
  );
}
