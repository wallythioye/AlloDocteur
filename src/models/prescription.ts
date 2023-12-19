import { Medecin } from "./medecin";
import { Patient } from "./patient";

export interface Prescription {
  id: number;
  medicament: string;
  description: string;
  date: Date;
  medecin: Medecin;
  patient: Patient;
  idPatient: number;
}


