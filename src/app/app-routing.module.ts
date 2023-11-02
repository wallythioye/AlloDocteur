import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AjoutMedecinComponent } from './ajout-medecin/ajout-medecin.component';
import { AjoutDossierMedicalComponent } from './ajout-dossier-medical/ajout-dossier-medical.component';
import { AjoutPrinscriptionComponent } from './ajout-prinscription/ajout-prinscription.component';
import { AjoutRendezvousMedecinComponent } from './ajout-rendezvous-medecin/ajout-rendezvous-medecin.component';
import { MenuComponent } from './menu/menu.component';
import { MenuPatientComponent } from './menu-patient/menu-patient.component';
import { MenuMedecinComponent } from './menu-medecin/menu-medecin.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { AcceuilPatientComponent } from './acceuil-patient/acceuil-patient.component';
import { AcceuilMedecinComponent } from './acceuil-medecin/acceuil-medecin.component';
import { PlanningMedecinComponent } from './planning-medecin/planning-medecin.component';
import { PlanningListeComponent } from './planning-liste/planning-liste.component';
import { ListeMedecinComponent } from './liste-medecin/liste-medecin.component';
import { ModiferRendezVousComponent } from './modifer-rendez-vous/modifer-rendez-vous.component';
import { MesDossierMedicalComponent } from './mes-dossier-medical/mes-dossier-medical.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';

const routes: Routes = [
  {path:"", component:AcceuilComponent},
  {path:"acceuilAdmin", component:AcceuilAdminComponent},
  {path:"acceuilPatient", component:AcceuilPatientComponent},
  {path:"acceuilMedecin", component:AcceuilMedecinComponent},
  {path:"menuAcceuil", component:MenuComponent},
  {path:"menuPatient", component:MenuPatientComponent},
  {path:"menuMedecin", component:MenuMedecinComponent},
  {path:"menuAdmin", component:MenuAdminComponent},
  {path:"connexion", component:ConnexionComponent},
  {path:"inscriptionPatient", component:InscriptionComponent},
  {path:"ajoutMedecin", component:AjoutMedecinComponent},
  {path:"ajoutDossierMedical", component:AjoutDossierMedicalComponent},
  {path:"ajoutPrescription", component:AjoutPrinscriptionComponent},
  {path:"ajoutrvMedecin", component:AjoutRendezvousMedecinComponent},
  {path:"planningMedecin", component:PlanningMedecinComponent},
  {path:"planningListe", component:PlanningListeComponent},
  {path:"listeMedecin", component:ListeMedecinComponent},
  {path:"listePatient", component:ListePatientComponent},
  {path:"modifierRv", component:ModiferRendezVousComponent},
  {path:"mesDossierMedical", component:MesDossierMedicalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
