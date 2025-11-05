import { axiosInstance } from "./axios";

export class JornadaService {
  async getTrilhas(){
    return axiosInstance.get(`/jornada`)
  }

  async obterJornadaPorId(id: number) {
    return axiosInstance.get(`/jornada/${id}`);
  }
}
