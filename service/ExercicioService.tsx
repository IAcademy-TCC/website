import { axiosInstance } from "./axios";

export class ExercicioService {
  async obterExercicio(idUnidade: number, idExercicio: number) {
    return axiosInstance.get(`/exercicio/${idUnidade}/${idExercicio}`);
  }

  async obterStatusExercicio(idExercicio: number) {
    return axiosInstance.get(`/exercicio/status/${idExercicio}`);
  }
  
}


export const exercicioService = new ExercicioService();
