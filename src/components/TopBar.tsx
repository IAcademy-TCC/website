import { useRouter } from "next/navigation";
import logo from "../assets/logo.png";
import Image from "next/image";

export default function TopBar() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center h-20 px-10 w-full">
      {/* Logo à esquerda */}
      <div className="flex items-center">
        <Image src={logo} width={220} alt="Logo IAcademy" />
      </div>

      {/* Navegação à direita */}
      <div className="flex items-center gap-8 text-dark-blue">
        <div className="flex gap-6">
          <a href="#" className="hover:text-dark-hover-blue">Início</a>
          <a href="#" className="hover:text-dark-hover-blue">Trilhas</a>
          <a href="#" className="hover:text-dark-hover-blue">Comunidade</a>
          <a href="#" className="hover:text-dark-hover-blue">Ranking</a>
        </div>

        <div className="flex items-center gap-4 ml-30">
          <button className="text-normal-blue hover:text-normal-hover-blue font-semibold cursor-pointer"  onClick={() => router.push("/login")}>Entrar</button>
          <button
            className="bg-darker-blue px-4 py-2 rounded-lg text-white cursor-pointer hover:bg-dark-hover-blue"
            type="button"
            onClick={() => router.push("/cadastro")}
          >
            Comece Agora
          </button>
        </div>
      </div>
    </div>
  );
}
