
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from 'src/models/consultation';
import { Medecin } from 'src/models/medecin';
import { Patient } from 'src/models/patient';
import { ConsultationService } from 'src/services/consultation.service';

import { MedecinService } from 'src/services/medecin-service.service';
import { PatientService } from 'src/services/patient-service.service';

@Component({
  selector: 'app-ajout-consultation',
  templateUrl: './ajout-consultation.component.html',
  styleUrls: ['./ajout-consultation.component.scss']
})
export class AjoutConsultationComponent implements OnInit {
  consultations: Consultation[] = [];

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
    patient: {} as Patient,
    idPatient: 0,

   
  };

  errorMessage = '';
  successMessage ='';


  patients: Patient[] = [];
  medecins: Medecin[] = [];

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

      refreshConsultation(): void {
        this.consultationService.getListeConsultations().subscribe(
          {
            next: (consultations: Consultation[]) => {
              this.consultations = consultations;
            },
            error: (err: any) => {
              this.errorMessage = 'Erreur de requête';
            },
            complete: () => {
              this.successMessage = 'Requête valide';
            }
          }
        );
      }
  
      ajoutConsultation(): void {
        this.consultationService.ajouterConsultation(this.nouvelleConsultation).subscribe(
       (nouvelleConsultation: Consultation) => {
            console.log('Consultation ajoutée avec succès', nouvelleConsultation);
            this.refreshConsultation();
            this.gotoList('Consultation ajoutée avec succès');
          },
          (err: any) => {
            console.error('Erreur lors de l\'ajout de la consultation', err);
            this.errorMessage = 'Erreur lors de l\'ajout de la consultation';
           
          }
        );
      }
      
      
    gotoList(successMessage: string): void{
      this.router.navigate(['/listeConsultation'], { queryParams: { successMessage } });
    }

}
