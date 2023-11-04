
import { MedecinDossier } from "./medecinDossier";
import { Patient } from "./patient";

export interface DossierMedicale {
  id: number; 
  allergi: string[];
  traitement: string[];
  date: Date;
  patient: Patient;
  medecinDossier: MedecinDossier[];
}
