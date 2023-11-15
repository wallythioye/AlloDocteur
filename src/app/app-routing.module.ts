
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { AcceuilMedecinComponent } from './acceuil-medecin/acceuil-medecin.component';
import { AcceuilPatientComponent } from './acceuil-patient/acceuil-patient.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjoutConsultationComponent } from './ajout-consultation/ajout-consultation.component';
import { AjoutMedecinComponent } from './ajout-medecin/ajout-medecin.component';
import { AjoutPrinscriptionComponent } from './ajout-prinscription/ajout-prinscription.component';
import { AjoutRendezvousMedecinComponent } from './ajout-rendezvous-medecin/ajout-rendezvous-medecin.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeMedecinComponent } from './liste-medecin/liste-medecin.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuMedecinComponent } from './menu-medecin/menu-medecin.component';
import { MenuPatientComponent } from './menu-patient/menu-patient.component';
import { MenuComponent } from './menu/menu.component';
import { ModiferRendezVousComponent } from './modifer-rendez-vous/modifer-rendez-vous.component';
import { PlanningListeComponent } from './planning-liste/planning-liste.component';
import { PlanningMedecinComponent } from './planning-medecin/planning-medecin.component';

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
  {path:"ajoutPrescription", component:AjoutPrinscriptionComponent},
  {path:"ajoutrvMedecin", component:AjoutRendezvousMedecinComponent},
  {path:"planningMedecin", component:PlanningMedecinComponent},
  {path:"planningListe", component:PlanningListeComponent},
  {path:"listeMedecin", component:ListeMedecinComponent},
  {path:"listePatient", component:ListePatientComponent},
  {path:"modifierRv", component:ModiferRendezVousComponent},
  {path:"ajoutConsultation", component:AjoutConsultationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
