import { Prescription } from "./prescription";
import { RendezVous } from "./rendezvous";
import { Utilisateur } from "./utilisateur";

export interface Medecin extends Utilisateur{
    specialite: string;
    prescriptions:Prescription[];
    rendezvous:RendezVous[];
}