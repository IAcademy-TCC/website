"use client";

import { use } from "react";
import { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";
import { JornadaService } from "../../../../service/JornadaService";
import ModuloItem from "@/components/ModuloItem";
import { Users, Star, Clock } from "lucide-react";

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
      <div className="px-30 py-12 bg-gradient-to-br from-white to-[#f6f8fa] min-h-screen font-sans space-y-12">
        {/* Nome da Jornada */}
        <h1 className="text-4xl font-extrabold text-darker-blue mb-4">{jornada.nome}</h1>

        {/* Descrição + Vídeo lado a lado */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Descrição */}
          <p className="text-darker-blue  text-lg max-w-6xl leading-relaxed flex-1">
            {jornada.descricao}
          </p>

          {/* Vídeo */}
          <div className="flex-1 max-w-2xl">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-zinc-200">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/_uQrJ0TkZlc"
                title="Trilha Python - Introdução"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* 📊 Informações da Jornada */}
        <div className="flex flex-col sm:flex-row justify-start gap-10 mt-6">
          {/* Alunos */}
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md border border-zinc-200">
            <Users className="text-normal-blue w-6 h-6" />
            <div>
              <p className="text-zinc-800 font-semibold text-lg">+2.500 alunos</p>
              <p className="text-sm text-zinc-500">já iniciaram esta jornada</p>
            </div>
          </div>

          {/* Avaliação */}
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md border border-zinc-200">
            <Star className="text-yellow-400 w-6 h-6" />
            <div>
              <p className="text-zinc-800 font-semibold text-lg">4.8 / 5.0</p>
              <p className="text-sm text-zinc-500">avaliação média</p>
            </div>
          </div>

          {/* Duração */}
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md border border-zinc-200">
            <Clock className="text-normal-blue w-6 h-6" />
            <div>
              <p className="text-zinc-800 font-semibold text-lg">+40h</p>
              <p className="text-sm text-zinc-500">de conteúdo total</p>
            </div>
          </div>
        </div>

        {/* Trilhas e módulos */}
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
