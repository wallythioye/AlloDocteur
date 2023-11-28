import { Medecin } from "./medecin";
import { Patient } from "./patient";

export interface Consultation {
    id: number;
    motif: string;
    antecedent: string;
    allergie: string;
    date: Date;
    groupeSanguin: string;
    diagnostic: string;
    poids: number;
    taille: number;
    profession: string;
    medecin: Medecin;
    patient: Patient;
  }
  
