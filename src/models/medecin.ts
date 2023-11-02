import { Utilisateur } from "./utilisateur";
import { Prescription } from "./prescription";
import { RendezVous } from "./rendezvous";

export interface Medecin extends Utilisateur{
    specialite: string;
    prescriptions:Prescription[];
    rendezvous:RendezVous[];
}