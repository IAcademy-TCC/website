"use client";

import { use } from "react";
import { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";
import { JornadaService } from "../../../../service/JornadaService";
import ModuloItem from "@/components/ModuloItem";

export default function JornadaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); 
  const [jornada, setJornada] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const service = new JornadaService();
        const response = await service.obterJornadaPorId(Number(id));
        setJornada(response.data);

      } catch (err) {
        console.error("Erro ao buscar jornada:", err);
      }
    };
    fetchData();
  }, [id]);

  if (!jornada) return <p className="p-8">Carregando jornada...</p>;

  return (
    <>
      <TopBar />
      <div className="px-10 py-12 space-y-12 bg-gradient-to-br from-white to-[#f6f8fa] min-h-screen font-sans">
        <h1 className="text-4xl font-extrabold text-zinc-900 mb-4">{jornada.nome}</h1>
        <p className="text-zinc-600 max-w-2xl">{jornada.descricao}</p>

        {jornada.trilha?.map((trilha: any, trilhaIndex: number) => (
          <div key={trilhaIndex}>
            <h2 className="text-2xl font-bold text-zinc-800 mt-10">{trilha.nome}</h2>

            {trilha.modulo?.map((modulo: any, moduloIndex: number) => (
              <ModuloItem key={moduloIndex} modulo={modulo} index={moduloIndex} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
