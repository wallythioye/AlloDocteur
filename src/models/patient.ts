import { Prescription } from "./prescription";
import { Rappel } from "./rappel";
import { RendezVous } from "./rendezvous";
import { Utilisateur } from "./utilisateur";

export interface Patient extends Utilisateur {
  rendezVous: RendezVous[];
  prescriptions: Prescription[];
  rappels: Rappel[];
}