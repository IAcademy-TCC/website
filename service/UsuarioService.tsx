import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000"
})

export class UsuarioService{

    cadastrarUsuario(dados: {
        nome:string;
        celular:string;
        email:string;
        senha:string;
    }) {
        return axiosInstance.post("/auth/register", dados);
    }

    loginUsuario(dados: {
        email: string;
        senha: string;
      }) {
        return axiosInstance.post("/auth/login", dados);
      }
    }