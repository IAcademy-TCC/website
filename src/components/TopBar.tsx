import { useRouter } from "next/navigation";
import logo from "../assets/logo.png";
import Image from "next/image";

export default function TopBar() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center h-20 px-10 w-full">
      {/* Logo à esquerda */}
      <div className="flex items-center">
        <Image src={logo} width={220} alt="Logo iAcademy" />
      </div>

      {/* Navegação à direita */}
      <div className="flex items-center gap-8 text-principal">
        <div className="flex gap-6">
          <a href="#" className="">Início</a>
          <a href="#" className="">Trilhas</a>
          <a href="#" className="">Comunidade</a>
          <a href="#" className="">Ranking</a>
        </div>

        <div className="flex items-center gap-4 ml-5">
          <button className="text-principal font-semibold cursor-pointer"  onClick={() => router.push("/login")}>Entrar</button>
          <button
            className="bg-azul-escuro px-4 py-2 rounded-lg text-white cursor-pointer"
            type="button"
            onClick={() => router.push("/login")}
          >
            Comece Agora
          </button>
        </div>
      </div>
    </div>
  );
}
