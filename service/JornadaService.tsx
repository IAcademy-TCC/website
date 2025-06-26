import { axiosInstance } from "./axios";

export class JornadaService {
  async obterJornadaPorId(id: number) {
    return axiosInstance.get(`/jornada/${id}`);
  }
}
