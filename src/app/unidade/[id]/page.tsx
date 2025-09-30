"use client";

import UnitHeader from "@/components/UnitHeader";
import UnitContent from "@/components/UnitContent";
import UnitChallenge from "@/components/UnitChallenge";
import UnitNavigation from "@/components/UnitNavigation";
import { useRouter } from "next/navigation";

export default function UnidadePage() {
  const router = useRouter();

  const handleAnswer = (answer: string) => {
    alert(`Você respondeu: ${answer}`);
  };

  return (
    <div className="px-10 py-12 space-y-8 bg-gradient-to-br from-white to-[#f6f8fa] min-h-screen font-sans">
      <UnitHeader
        title="Introdução ao Python"
        subtitle="Aprenda os primeiros passos da linguagem e configure seu ambiente."
        duration="30 minutos"
      />

      <UnitContent
        content="Se você já se perguntou como sites, aplicativos, jogos ou até mesmo programas de inteligência artificial são criados, saiba que uma linguagem de programação está por trás de tudo isso. Python é uma dessas linguagens — e uma das mais queridas do mundo atualmente. Criada por Guido van Rossum e lançada em 1991, Python se destaca por sua simplicidade, clareza e poder. É como aprender a cozinhar usando receitas com poucos ingredientes e passos bem explicados. Python é uma linguagem de alto nível, ou seja, está mais próxima da linguagem humana do que da linguagem da máquina, tornando o código fácil de ler e escrever, mesmo para quem está começando do zero.

Um dos grandes atrativos do Python é sua versatilidade. Ele é usado para desenvolver desde sites e automações simples até projetos complexos como inteligência artificial, análise de dados e robótica. Companhias como Google, Netflix, Spotify e até a NASA utilizam Python em diversos projetos. Isso acontece porque ele oferece uma enorme variedade de bibliotecas (ou seja, pacotes prontos com funções úteis) e possui uma comunidade global gigantesca, sempre pronta para compartilhar soluções e ideias. A curva de aprendizado também é bem suave: a sintaxe do Python parece muito com frases do inglês, o que torna o código bastante intuitivo.

Para facilitar o entendimento, imagine que Python é como um conjunto de blocos de Lego. Com as peças certas, você pode construir qualquer coisa — desde uma casinha até uma nave espacial. Cada comando é uma peça. E, quando bem encaixados, os blocos formam projetos incríveis. É por isso que Python é tão recomendado para iniciantes e, ao mesmo tempo, tão usado por profissionais experientes."
      />

      <UnitChallenge
        question="Qual das opções descreve melhor o Python?"
        options={[
          "Uma linguagem difícil de aprender",
          "Uma linguagem popular pela simplicidade",
          "Um software de edição de imagens",
          "Um banco de dados relacional",
        ]}
        onAnswer={handleAnswer}
      />

      <UnitNavigation
        onPrevious={() => router.push("/unidade/0")}
        onNext={() => router.push("/unidade/2")}
      />
    </div>
  );
}
