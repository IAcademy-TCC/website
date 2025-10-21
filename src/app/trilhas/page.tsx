"use client" // ⚠️ tem que ser a primeira linha, sem comentários acima

import React, { useState } from "react"
import TopBar from "@/components/TopBar" // usa o seu TopBar original
import { useAuth } from "@/app/hooks/useAuth"

interface Trail {
  title: string
  description: string
  points: number
  time: string
}

// 🔹 Dados simulados
const trailsData: Trail[] = [
  {
    title: "Adoptar e confiar na fórmula CRM + IA + dados",
    description:
      "Aprenda a tomar decisões mais inteligentes, a aproveitar o poder da automação e a criar IA confiável usando os produtos e a tecnologia mais populares da Salesforce.",
    points: 5200,
    time: "~7 h 35 min",
  },
  {
    title: "Adquirir as habilidades de IA que você precisa para ter sucesso",
    description:
      "Desenvolva suas habilidades fundamentais de IA com o Salesforce.",
    points: 3300,
    time: "~5 h 58 min",
  },
  {
    title:
      "Aprofunde-se nas ferramentas e conceitos de desenvolvimento do Salesforce",
    description:
      "Experimente o Salesforce Developer Experience e conheça os fundamentos do Apex.",
    points: 20400,
    time: "~27 h 42 min",
  },
  {
    title: "Ativar e otimizar o B2C Commerce para sua empresa",
    description:
      "Saiba como ativar seu site e, em seguida, aproveitá-lo ao máximo usando ferramentas para personalizar e impulsionar sua loja.",
    points: 11500,
    time: "~13 h 20 min",
  },
]

export default function TrilhasPage() {
  const [search, setSearch] = useState("")
  const { user } = useAuth()

  const filteredTrails = trailsData.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* TopBar importado */}
      <TopBar />

      {/* Conteúdo principal */}
      <main className="max-w-7xl mx-auto py-10 px-4 lg:px-6 flex flex-col lg:flex-row gap-8">
        {/* Filtros */}
        <aside className="w-full lg:w-1/4 border border-gray-200 rounded-lg p-4 h-fit">
          <h2 className="text-xl font-semibold mb-4 text-[#032D60]">Filtro</h2>

          {[
            "Objetivo",
            "Níveis",
            "Produtos",
            "Papéis",
            "Habilidades",
            "Indústrias",
          ].map((label) => (
            <div key={label} className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <select className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Selecionar...</option>
              </select>
            </div>
          ))}
          <p className="text-xs text-blue-600 cursor-pointer hover:underline">
            Saiba mais sobre habilidades
          </p>
        </aside>

        {/* Lista de Trilhas */}
        <section className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold text-[#032D60]">
              Trilhas{" "}
              <span className="text-gray-500 font-normal">
                (231 resultado(s))
              </span>
            </h2>

            <div className="flex gap-4 w-full md:w-auto">
              <input
                type="text"
                placeholder="Pesquisa rápida"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 rounded-md p-2 text-sm flex-1"
              />
              <select className="border border-gray-300 rounded-md p-2 text-sm">
                <option>Classificar por mais relevante</option>
              </select>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            {filteredTrails.map((trail) => (
              <div
                key={trail.title}
                className="border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E5F3FE] rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-lg font-bold">S</span>
                  </div>
                  <div>
                    <h3 className="text-blue-700 font-semibold text-lg hover:underline cursor-pointer">
                      {trail.title}
                    </h3>
                    <p className="text-sm text-gray-700 mt-1">
                      {trail.description}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      +{trail.points.toLocaleString()} pontos
                    </p>
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 text-sm text-gray-500">
                  {trail.time}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
