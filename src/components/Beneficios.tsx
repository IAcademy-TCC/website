import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

type Card = {
  emoji: string;
  text: string;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  }),
};

export default function Beneficios(): JSX.Element {
  const cards: Card[] = [
    { emoji: '🧠', text: 'Trilha com IA personalizada' },
    { emoji: '🥇', text: 'Badges e Certificados' },
    { emoji: '🧩', text: 'Exercícios práticos por módulo' },
    { emoji: '📊', text: 'Rankings por campus e matéria' },
    { emoji: '💬', text: 'Comunidade integrada' },
  ];

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' }); 
  // 'once: true' faz só uma vez; 'margin' dá um offset para disparar um pouco antes

  return (
    <section className="py-16 px-4 text-center" ref={ref}>
      <h2 className="text-4xl font-bold text-[#2A2A8F]">
        Benefícios <span className="text-blue-600 font-bold">/ Features</span>
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {cards.map(({ emoji, text }, i) => (
          <motion.div
            key={i}
            className="bg-blue-600 text-white py-6 px-4 rounded-xl shadow-md text-lg font-semibold"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={i}
          >
            <span className="text-3xl block mb-2">{emoji}</span>
            {text}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
