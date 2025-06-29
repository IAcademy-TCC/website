"use client";

import loginImg from "../../assets/img-login.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "../../components/Input";
import { UsuarioService } from "../../../service/UsuarioService";

export default function Login() {
  const usuarioService = new UsuarioService();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function login() {
    if (!email || !senha){
      alert("Preencha todos os campos")
    }

    try {
      const response = await usuarioService.loginUsuario({ email, senha });

      console.log("Login realizado:", response.data);
      // Opcional: salvar token e redirecionar
      localStorage.setItem("token", response.data.token);

      router.push("/dashboard");
    } catch (error: any) {
      console.error("Erro ao logar:", error);
      if (error.response?.data?.error) {
        alert(error.response.data.error);
      } else {
        alert("Erro inesperado ao tentar fazer login.");
      }
    }
  }

  return (
    <div className="flex flex-row justify-between items-center m-30">
      <div className="flex flex-col">
        <div>
          <h2 className="text-cinza-texto text-xl">Bem-vindo ao</h2>
          <h1 className="text-foreground font-extrabold text-3xl">IAcademy</h1>
        </div>

        <div className="mt-15">
          <button
            className="w-94 h-13 text-darker-grey text-base border-1 border-normal-grey rounded-xl
                       hover:bg-normal-hover-blue hover:text-white hover:border-0 cursor-pointer"
          >
            Microsoft
          </button>
        </div>

        <Input
          label="E-mail"
          placeholder="Digite seu e-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Senha"
          placeholder="Digite sua senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <div className="w-94 mt-2 text-right text-normal-blue">
          <a href="#" className="font-bold">
            Esqueceu a senha?
          </a>
        </div>

        <div className="mt-5">
          <button
            className="w-94 h-13 bg-normal-blue text-white font-semibold size-22 rounded-xl hover:bg-normal-hover-blue hover:text-white cursor-pointer"
            type="button"
            onClick={login}
          >
            Entrar
          </button>
        </div>

        <div className="w-93 mt-3 flex flex-row">
          <p className="text-darker-grey">Ainda não tem uma conta?</p>
          <a href="/cadastro" className="ml-1 font-semibold text-normal-blue">
            Cadastre-se
          </a>
        </div>
      </div>

      <div className="flex flex-col">
        <Image src={loginImg} alt="Logo" />
      </div>
    </div>
  );
}
