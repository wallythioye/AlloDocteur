import { Medecin } from "./medecin";
import { Patient } from "./patient";

export interface RendezVous {
  id: number;
  date: Date;
  statut: string;
  patient: Patient;
  medecin: Medecin; 
  motiif: string;
}