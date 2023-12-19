import { Consultation } from "./consultation";
import { Planning } from "./planning";
import { Prescription } from "./prescription";
import { RendezVous } from "./rendezvous";
import { Utilisateur } from "./utilisateur";

export interface Medecin extends Utilisateur {
    id:number;
    specialite: string;
    prescriptions: Prescription[];
    rendezVous: RendezVous[];
    consultations: Consultation[];
    planings: Planning[];
}
