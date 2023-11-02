import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MenuComponent } from './menu/menu.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AjoutMedecinComponent } from './ajout-medecin/ajout-medecin.component';
import { AjoutDossierMedicalComponent } from './ajout-dossier-medical/ajout-dossier-medical.component';
import { AjoutPrinscriptionComponent } from './ajout-prinscription/ajout-prinscription.component';
import { AjoutRendezvousMedecinComponent } from './ajout-rendezvous-medecin/ajout-rendezvous-medecin.component';
import { FooterComponent } from './footer/footer.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuPatientComponent } from './menu-patient/menu-patient.component';
import { MenuMedecinComponent } from './menu-medecin/menu-medecin.component';
import { AcceuilAdminComponent } from './acceuil-admin/acceuil-admin.component';
import { AcceuilPatientComponent } from './acceuil-patient/acceuil-patient.component';
import { AcceuilMedecinComponent } from './acceuil-medecin/acceuil-medecin.component';
import { PlanningMedecinComponent } from './planning-medecin/planning-medecin.component';
import { PlanningListeComponent } from './planning-liste/planning-liste.component';
import { ListeMedecinComponent } from './liste-medecin/liste-medecin.component';
import { ModiferRendezVousComponent } from './modifer-rendez-vous/modifer-rendez-vous.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { MesDossierMedicalComponent } from './mes-dossier-medical/mes-dossier-medical.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    MenuComponent,
    InscriptionComponent,
    ConnexionComponent,
    AjoutMedecinComponent,
    AjoutDossierMedicalComponent,
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
    MesDossierMedicalComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
