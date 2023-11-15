import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FooterComponent } from './footer/footer.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeMedecinComponent } from './liste-medecin/liste-medecin.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { ListePrescriptionComponent } from './liste-prescription/liste-prescription.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuMedecinComponent } from './menu-medecin/menu-medecin.component';
import { MenuPatientComponent } from './menu-patient/menu-patient.component';
import { MenuComponent } from './menu/menu.component';
import { ModiferRendezVousComponent } from './modifer-rendez-vous/modifer-rendez-vous.component';
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
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
