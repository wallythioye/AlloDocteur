import { Component } from '@angular/core';
import { Consultation } from 'src/models/consultation';
import { Medecin } from 'src/models/medecin';
import { Patient } from 'src/models/patient';
import { ConsultationService } from 'src/services/consultation.service';

@Component({
  selector: 'app-ajout-consultation',
  templateUrl: './ajout-consultation.component.html',
  styleUrls: ['./ajout-consultation.component.scss']
})
export class AjoutConsultationComponent {
  listeConsultations: Consultation[] = [];

  nouvelleConsultation: Consultation = {
    id: 0,
    date: new Date(),
    poids: 0,
    taille: 0,
    medecin: {} as Medecin,
    patient: {} as Patient,
    allergie: '',
    antecedent: '',
    diagnostic: '',
    groupe_sanguin: '',
    motif: '',
    profession: ''
  };

  constructor(private consultationService: ConsultationService) { }

  
  ajoutConsultation(): void {
    this.consultationService.ajouterConsultation(this.nouvelleConsultation).subscribe(
      (response) => {
        console.log('Consultation ajoutée avec succès', response);
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la consultation', error);
      }
    );
  }
}
