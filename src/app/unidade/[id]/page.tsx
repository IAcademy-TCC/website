"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { JornadaService } from "../../../../service/JornadaService";
import TopBar from "@/components/TopBar";
import ExercicioCard from "@/components/ExercicioCard";

export default function UnidadePage() {
  const { id } = useParams();                          // só existe "id" na rota
  const searchParams = useSearchParams();              // modulo + jornada vem daqui

  const moduloId = searchParams.get("modulo");
  const jornadaId = searchParams.get("jornada");
  const trilhaId = searchParams.get("trilha");


  const [unidade, setUnidade] = useState<any>(null);
  console.log("params:", { id, moduloId, trilhaId, jornadaId });


  useEffect(() => {
    if (!id || !moduloId || !jornadaId) return;

    async function fetchUnidade() {
      try {
        const service = new JornadaService();

        const response = await service.obterUnidadePorId(
          Number(id),
          Number(moduloId),
          Number(trilhaId),
          Number(jornadaId)
        );

        console.log("UNIDADE RESPONSE:", response.data);
        setUnidade(response.data);

      } catch (err) {
        console.error("Erro ao buscar unidade:", err);
      }
    }

    fetchUnidade();
  }, [id, moduloId, trilhaId, jornadaId]);

  if (!unidade) {
    return (
      <div className="p-6 text-center text-gray-500">
        Carregando conteúdo da unidade...
      </div>
    );
  }

  return (
    <>
    <TopBar />
    <div className="p-7 max-w-7xl mx-auto text-justify">
      <h1 className="text-3xl font-bold text-dark-blue mb-4">{unidade.titulo}</h1>
      <p className="text-lg text-gray-700 mb-6">{unidade.descricao}</p>

      {unidade.video && (
        <div className="mb-6">
          <video controls className="rounded-lg w-full shadow-md">
            <source src={unidade.video} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>
      )}

      {unidade.conteudo && (
        <div
          className="prose prose-blue"
          dangerouslySetInnerHTML={{ __html: unidade.conteudo }}
        />
      )}

    {/* 🧩 ADICIONANDO A SEÇÃO DE EXERCÍCIOS */}
    {unidade.exercicio && unidade.exercicio.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-dark-blue border-b pb-2 mb-4">
            Avaliações e Exercícios
          </h2>
          {unidade.exercicio.map((exercicio: any) => (
            <ExercicioCard key={exercicio.id} exercicio={exercicio} />
          ))}
        </div>
      )}
    </div>
    </>
  );
}
