"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { JornadaService } from "../../../../service/JornadaService";

export default function UnidadePage() {
  const { id } = useParams();
  const [unidade, setUnidade] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchUnidade() {
      try {
        const service = new JornadaService();
        const response = await service.obterUnidadePorId(Number(id)); // método correto do service
        setUnidade(response.data); // ajusta conforme seu service
      } catch (err) {
        console.error("Erro ao buscar unidade:", err);
      }
    }

    fetchUnidade();
  }, [id]);

  if (!unidade) {
    return (
      <div className="p-6 text-center text-gray-500">
        Carregando conteúdo da unidade...
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
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
    </div>
  );
}
