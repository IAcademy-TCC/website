"use client"

import Image from "next/image"
import banner from "../assets/banner.png"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Banner() {
    const router = useRouter();

  return (
    <div className="w-full h-[780px] mx-auto relative overflow-hidden shadow-md">
      
      {/* Banner animado com fade-in e leve zoom */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={banner}
          alt="Banner"
          className="w-full h-[780px] object-cover"
          priority
        />
      </motion.div>

      {/* Texto e botão centralizados com animações */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10">
        
        <motion.h1
          className="text-4xl md:text-5xl font-bold drop-shadow-lg leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Trilhe seu caminho na <span className="text-blue-500">programação</span><br />
          com uma jornada <span className="text-blue-500">personalizada</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg max-w-xl drop-shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          Plataforma <span className="text-blue-400">gratuita</span> para alunos de <span className="text-blue-400">ADS</span> das ETECs/FATECs. Aprenda, pratique, conquiste badges e receba certificações.
        </motion.p>

        <motion.button
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          onClick={() => router.push("/login")}
        >
          Começar Trilha →
        </motion.button>
      </div>
    </div>
  )
}
