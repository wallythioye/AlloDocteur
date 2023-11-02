import { Time } from "@angular/common";
import { Medecin } from "./medecin";
import { Patient } from "./patient";

export interface Prescription {
  id: number;
  medicament: string[];
  description: string;
  medecin: Medecin;
  patient: Patient;
  date: Date;
  heure : Time;
}