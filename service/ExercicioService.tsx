import { axiosInstance } from "./axios";

export class ExercicioService {
  async obterExercicio(idUnidade: number, idExercicio: number) {
    return axiosInstance.get(`/exercicio/${idUnidade}/${idExercicio}`);
  }
}

export const exercicioService = new ExercicioService();
