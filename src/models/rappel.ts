import { Patient } from "./patient";

export interface Rappel {
  id: number;
  type: string;
  date: Date;
  statut: string;
  message: string;
  patient: Patient;
}
