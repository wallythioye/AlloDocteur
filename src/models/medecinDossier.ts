import { DossierMedicale } from "./dossierMedicale";
import { Medecin } from "./medecin";

export interface MedecinDossier{
  motif: string;
  antecedant: string;
  typeMaladie: string;
  medecins:Medecin[];
  dossiersMedical:DossierMedicale[];
}
