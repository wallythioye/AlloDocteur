import { Medecin } from "./medecin";

export interface Planning {
    id: number;
    date: Date;
    disponibilite?: number;
    medecin: Medecin;
    idMedecin: number;
}
