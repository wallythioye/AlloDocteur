import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { JwtService } from 'src/services/jwtService';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { AcceuilMedecinComponent } from './acceuil-medecin/acceuil-medecin.component';
import { AcceuilPatientComponent } from './acceuil-patient/acceuil-patient.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjoutConsultationComponent } from './ajout-consultation/ajout-consultation.component';
import { AjoutMedecinComponent } from './ajout-medecin/ajout-medecin.component';
import { AjoutPatientAdminComponent } from './ajout-patient-admin/ajout-patient-admin.component';
import { AjoutPatientMedecinComponent } from './ajout-patient-medecin/ajout-patient-medecin.component';
import { AjoutPrinscriptionComponent } from './ajout-prinscription/ajout-prinscription.component';
import { AjoutRendezvousMedecinComponent } from './ajout-rendezvous-medecin/ajout-rendezvous-medecin.component';
import { AjoutRendezvousPatientComponent } from './ajout-rendezvous-patient/ajout-rendezvous-patient.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FooterComponent } from './footer/footer.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeConsultationPatientComponent } from './liste-consultation-patient/liste-consultation-patient.component';
import { ListeConsultationComponent } from './liste-consultation/liste-consultation.component';
import { ListeMedecinComponent } from './liste-medecin/liste-medecin.component';
import { ListePatientMedecinComponent } from './liste-patient-medecin/liste-patient-medecin.component';
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
import { PlanningListeComponent } from './planning-liste/planning-liste.component';
import { PlanningMedecinComponent } from './planning-medecin/planning-medecin.component';
import { ListeRendezvousPatientComponent } from './liste-rendezvous-patient/liste-rendezvous-patient.component';
import { ListeMedecinPatientComponent } from './liste-medecin-patient/liste-medecin-patient.component';
import { ListePlanningPatientComponent } from './liste-planning-patient/liste-planning-patient.component';
import { ModifierRendezvousPatientComponent } from './modifier-rendezvous-patient/modifier-rendezvous-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    MenuComponent,
    InscriptionComponent,
    ConnexionComponent,
    AjoutMedecinComponent,
    AjoutPrinscriptionComponent,
    AjoutRendezvousMedecinComponent,
    FooterComponent,
    MenuAdminComponent,
    MenuPatientComponent,
    MenuMedecinComponent,
    AcceuilAdminComponent,
    AcceuilPatientComponent,
    AcceuilMedecinComponent,
    PlanningMedecinComponent,
    PlanningListeComponent,
    ListeMedecinComponent,
    ModiferRendezVousComponent,
    ListePatientComponent,
    CarouselComponent,
    AjoutConsultationComponent,
    ListePrescriptionComponent,
    ListeRendezVousComponent,
    ModifierPrescriptionComponent,
    ModifierPlanningComponent,
    ModifierMedecinComponent,
    ModifierConsultationComponent,
    ListeConsultationComponent,
    AjoutRendezvousPatientComponent,
    ListePrescriptionPatientComponent,
    ListeConsultationPatientComponent,
    AjoutPatientMedecinComponent,
    AjoutPatientAdminComponent,
    ListePatientMedecinComponent,
    ListeRendezvousPatientComponent,
    ListeMedecinPatientComponent,
    ListePlanningPatientComponent,
    ModifierRendezvousPatientComponent
  ],

  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [DatePipe, JwtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
