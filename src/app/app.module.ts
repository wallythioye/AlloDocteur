import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { AcceuilMedecinComponent } from './acceuil-medecin/acceuil-medecin.component';
import { AcceuilPatientComponent } from './acceuil-patient/acceuil-patient.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjoutConsultationComponent } from './ajout-consultation/ajout-consultation.component';
import { AjoutMedecinComponent } from './ajout-medecin/ajout-medecin.component';
import { AjoutPrinscriptionComponent } from './ajout-prinscription/ajout-prinscription.component';
import { AjoutRendezvousMedecinComponent } from './ajout-rendezvous-medecin/ajout-rendezvous-medecin.component';
import { AjoutRendezvousPatientComponent } from './ajout-rendezvous-patient/ajout-rendezvous-patient.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FooterComponent } from './footer/footer.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeConsultationComponent } from './liste-consultation/liste-consultation.component';
import { ListeMedecinComponent } from './liste-medecin/liste-medecin.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
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
    AjoutRendezvousPatientComponent
  ],

  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    ReactiveFormsModule,
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
