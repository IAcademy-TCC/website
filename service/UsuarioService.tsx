import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000"
})

export class UsuarioService{

    listarTodos(){
        return axiosInstance.get("/teste")
    }
}