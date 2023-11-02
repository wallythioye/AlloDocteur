import { Utilisateur } from "./utilisateur";
import { Prescription } from "./prescription";
import { RendezVous } from "./rendezvous";
import { Rappel } from "./rappel";
import { DossierMedicale } from "./dossierMedicale";

export interface Patient extends Utilisateur {
  rendezVous: RendezVous[];
  dossierMedicale: DossierMedicale;
  prescriptions: Prescription[];
  rappels: Rappel[];
}