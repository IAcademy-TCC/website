"use client";

import { useRouter } from "next/navigation";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useAuth } from "@/app/hooks/useAuth";
import SearchBar from "./SearchBar";
import UserIcon from "./UserIcon";

export default function TopBar() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <div className="flex justify-between items-center h-20 px-10 w-full shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={logo} width={270} alt="Logo IAcademy" />
      </div>

      {/* Navegação */}
      <div className="flex text-lg font-semibold items-center gap-8 text-dark-blue">
        {user && (
          <div className="flex gap-6">
            <a href="/dashboard" className="hover:text-dark-hover-blue">Início</a>
            <a href="/jornada/1" className="hover:text-dark-hover-blue">Trilhas</a>
            <a href="#" className="hover:text-dark-hover-blue">Comunidade</a>
            <a href="#" className="hover:text-dark-hover-blue">Ranking</a>
          </div>
        )}

        {/* Autenticação */}
        {!user ? (
          <div className="flex items-center gap-4 ml-30">
            <button
              className="text-normal-blue hover:text-normal-hover-blue font-semibold cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Entrar
            </button>
            <button
              className="bg-darker-blue px-4 py-2 rounded-lg text-white cursor-pointer hover:bg-dark-hover-blue"
              type="button"
              onClick={() => router.push("/cadastro")}
            >
              Comece Agora
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4 ml-30">
            <SearchBar />
            <UserIcon />
          </div>
        )}
      </div>
    </div>
  );
}
