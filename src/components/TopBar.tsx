import UserIcon from "./UserIcon"
import { useRouter } from "next/navigation"

export default function TopBar(){
  const router = useRouter();

    return (
      <>
        <div className="flex justify-end items-center h-20 px-10 w-full">
            {/* Container para os links, alinhados à direita */}
            <div className="flex gap-x-6 mr-30 text-principal">
                <a href="#" className="">Inicio</a>
                <a href="#" className="">Trilhas</a>
                <a href="#" className="">Comunidade</a>
                <a href="#" className="">Ranking</a>
            </div>

            {/* Container para "Entrar" e botão "Comece Agora", com espaçamento entre eles */}
            <div className="flex items-center gap-4 ml-5">
              <button className="text-principal font-semibold cursor-pointer">Entrar</button>
              <button className="bg-azul-escuro w-33 h-10 rounded-lg text-white cursor-pointer"
              type="button"
              onClick={() => router.push("/login")}>Comece Agora</button>
            </div>
        </div>
      </>  
    );
}
