import { axiosInstance } from "./axios";

export class JornadaService {
  async getTrilhas(){
    return axiosInstance.get(`/jornada`)
  }

  async obterJornadaPorId(id: number) {
    return axiosInstance.get(`/jornada/${id}`);
  }

  async obterUnidadePorModulo(moduloId: number){
    return axiosInstance.get(`/unidade/${moduloId}`)
  }

  async obterUnidadePorId(id: number){
    return axiosInstance.get(`/unidade/${id}`)
  }
}

export const jornadaService = new JornadaService();