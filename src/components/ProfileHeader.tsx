"use client";

import { Pencil, Linkedin } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      {/* Banner */}
      <div className="w-full h-38 rounded-xl bg-gradient-to-r from-dark-blue to-normal-blue relative">
        <div className="absolute -bottom-13 left-6 w-30 h-30 rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center text-3xl font-bold text-blue-700">
          T
        </div>
      </div>

      {/* Info */}
      <div className="mt-18 ml-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-zinc-800">Thiago Gerbi</h2>
          <button className="text-normal-blue hover:underline flex items-center gap-1 text-sm">
            <Pencil size={14} /> Editar
          </button>
        </div>
        <p className="text-zinc-600 mt-1">Estudante na FATEC São Caetano do Sul</p>
        <p className="text-zinc-500 text-sm">São Caetano do Sul - SP</p>

        <div className="flex items-center gap-4 mt-3">
          <a href="#" className="text-normal-blue">
            <Linkedin size={20} />
          </a>
        </div>

        <div className="mt-4 p-3 border-2 w-75 rounded-2xl text-normal-blue">
          <p className="text-sm text-zinc-600">iacademy.com/perfil/thiagogerbi</p>
        </div>
      </div>
    </div>
  );
}
