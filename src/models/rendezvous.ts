import { Medecin } from "./medecin";
import { Patient } from "./patient";

export interface RendezVous {
    id: number;
    date: Date;
    dateCreation?: Date;
    statut?: string;
    idPatient: number;
    idMedecin: number;
    patient: Patient;
    medecin: Medecin;
    motif: string;
}


