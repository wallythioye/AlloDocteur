import { Medecin } from "./medecin";
import { Patient } from "./patient";

export interface Consultation {
    id: number;
    date: Date;
    poids: number;
    taille: number;
    medecin: Medecin;
    patient: Patient;
    allergie: string;
    antecedent: string;
    diagnostic: string;
    groupe_sanguin: string;
    motif: string;
    profession: string;
}
