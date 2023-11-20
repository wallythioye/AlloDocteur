import { Consultation } from "./consultation";
import { Prescription } from "./prescription";
import { Rappel } from "./rappel";
import { RendezVous } from "./rendezvous";
import { Utilisateur } from "./utilisateur";

export interface Patient extends Utilisateur {
  id: number;
  rendezVous: RendezVous[];
  consultations: Consultation[];
  prescriptions: Prescription[];
  rappels: Rappel[];
}
