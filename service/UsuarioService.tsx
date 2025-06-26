import { axiosInstance } from "./axios";

export class UsuarioService {
  cadastrarUsuario(dados: {
    nome: string;
    celular: string;
    email: string;
    senha: string;
  }) {
    return axiosInstance.post("/auth/register", dados);
  }

  loginUsuario(dados: { email: string; senha: string }) {
    return axiosInstance.post("/auth/login", dados);
  }

  getUsuarioLogado() {
    return axiosInstance.get("/perfil");
  }
}
