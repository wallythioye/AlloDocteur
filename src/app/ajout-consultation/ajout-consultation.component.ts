
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from 'src/models/consultation';
import { Medecin } from 'src/models/medecin';
import { Patient } from 'src/models/patient';
import { Utilisateur } from 'src/models/utilisateur';
import { ConsultationService } from 'src/services/consultation.service';

import { MedecinService } from 'src/services/medecin-service.service';
import { PatientService } from 'src/services/patient-service.service';

@Component({
  selector: 'app-ajout-consultation',
  templateUrl: './ajout-consultation.component.html',
  styleUrls: ['./ajout-consultation.component.scss']
})
export class AjoutConsultationComponent {
  listeConsultations: Consultation[] = [];

  nouvelleConsultation: Consultation = {
    
    id:0,
    date: new Date(),
    poids: 0,
    taille: 0,
    allergie: '',
    antecedent: '',
    diagnostic: '',
    groupeSanguin:'',
    motif: '',
    profession: '',
    medecin: {} as Medecin,
    patient: {} as Patient

   
  };

  errorMessage = '';
  successMessage ='';


  patients: Utilisateur[] = [];
  medecins: Utilisateur[] = [];

  constructor(private consultationService: ConsultationService,
    private patientService: PatientService,
    private medecinService: MedecinService,
    private route: ActivatedRoute,
    private router: Router) { }

  
    ngOnInit(): void {
      this.getPatients();
      this.getMedecins();
    }
  
    getPatients(): void {
      this.patientService.getPatients().subscribe(
        patients => {
          console.log(patients);
          this.patients = patients;
        },
        (error: any) => {
          console.error('Erreur lors de la récupération des patients :', error);
        }
      );
      }
      getMedecins(): void {
        this.medecinService.getMedecins().subscribe(
          (medecins: Medecin[]) => {
            this.medecins = medecins;
          },
          (error: any) => {
            console.error('Erreur lors de la récupération des médecins :', error);
          }
        );
      }
  
  ajoutConsultation(): void {
    this.consultationService.ajouterConsultation(this.nouvelleConsultation).subscribe(
      {
      next: (nouvelleConsultation: any) => {
        console.log('Consultation ajoutée avec succès', nouvelleConsultation);
        this.gotoList();
      },
     error: (err: any) => {
        console.error('Erreur lors de l\'ajout de la consultation', err);
        
      }
    }
    )
  }
  gotoList() {
    this.router.navigate(['/listeConsultation']);
  }
}
