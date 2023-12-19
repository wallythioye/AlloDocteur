
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { AcceuilMedecinComponent } from './acceuil-medecin/acceuil-medecin.component';
import { AcceuilPatientComponent } from './acceuil-patient/acceuil-patient.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjoutConsultationComponent } from './ajout-consultation/ajout-consultation.component';
import { AjoutMedecinComponent } from './ajout-medecin/ajout-medecin.component';
import { AjoutPrinscriptionComponent } from './ajout-prinscription/ajout-prinscription.component';
import { AjoutRendezvousMedecinComponent } from './ajout-rendezvous-medecin/ajout-rendezvous-medecin.component';
import { AjoutRendezvousPatientComponent } from './ajout-rendezvous-patient/ajout-rendezvous-patient.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeConsultationPatientComponent } from './liste-consultation-patient/liste-consultation-patient.component';
import { ListeConsultationComponent } from './liste-consultation/liste-consultation.component';
import { ListeMedecinComponent } from './liste-medecin/liste-medecin.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { ListePrescriptionPatientComponent } from './liste-prescription-patient/liste-prescription-patient.component';
import { ListePrescriptionComponent } from './liste-prescription/liste-prescription.component';
import { ListeRendezVousComponent } from './liste-rendez-vous/liste-rendez-vous.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuMedecinComponent } from './menu-medecin/menu-medecin.component';
import { MenuPatientComponent } from './menu-patient/menu-patient.component';
import { MenuComponent } from './menu/menu.component';
import { ModiferRendezVousComponent } from './modifer-rendez-vous/modifer-rendez-vous.component';
import { ModifierConsultationComponent } from './modifier-consultation/modifier-consultation.component';
import { ModifierMedecinComponent } from './modifier-medecin/modifier-medecin.component';
import { ModifierPlanningComponent } from './modifier-planning/modifier-planning.component';
import { ModifierPrescriptionComponent } from './modifier-prescription/modifier-prescription.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { PlanningListeComponent } from './planning-liste/planning-liste.component';
import { PlanningMedecinComponent } from './planning-medecin/planning-medecin.component';
import { AjoutPatientMedecinComponent } from './ajout-patient-medecin/ajout-patient-medecin.component';
import { AjoutPatientAdminComponent } from './ajout-patient-admin/ajout-patient-admin.component';
import { ListePatientMedecinComponent } from './liste-patient-medecin/liste-patient-medecin.component';
import { ListeRendezvousPatientComponent } from './liste-rendezvous-patient/liste-rendezvous-patient.component';

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
  {path:"ajoutPlanning", component:PlanningMedecinComponent},
  {path:"listePlanning", component:PlanningListeComponent},
  {path:"listeMedecin", component:ListeMedecinComponent},
  {path:"listePatient", component:ListePatientComponent},
  {path:"listePatientMedecin", component:ListePatientMedecinComponent},
  {path:"modifierRv/:id", component:ModiferRendezVousComponent},
  {path:"ajoutConsultation", component:AjoutConsultationComponent},
  {path:"listePrescription", component:ListePrescriptionComponent},
  {path:"listeConsultation", component:ListeConsultationComponent},
  {path:"listeRendezvous", component:ListeRendezVousComponent},
  {path:"listeRendezvousPatient", component:ListeRendezvousPatientComponent},
  {path:"modifierConsultation/:id", component:ModifierConsultationComponent},
  {path:"modifierPrescription/:id", component:ModifierPrescriptionComponent},
  {path:"modifierPlanning/:id", component:ModifierPlanningComponent},
  {path:"modifierMedecin", component:ModifierMedecinComponent},
  {path:"prendreRendezvous", component:AjoutRendezvousPatientComponent},
  {path:"acceuil", component:PageAcceuilComponent},
  {path:"listePrescriptionPatient", component:ListePrescriptionPatientComponent},
  {path:"listeConsultationPatient", component:ListeConsultationPatientComponent},
  {path:"ajoutPatientMedecin", component:AjoutPatientMedecinComponent},
  {path:"ajoutPatientAdmin", component:AjoutPatientAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
