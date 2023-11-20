import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Consultation } from 'src/models/consultation';
import { ConsultationService } from 'src/services/consultation.service';

@Component({
  selector: 'app-liste-consultation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-consultation.component.html',
  styleUrl: './liste-consultation.component.scss'
})
export class ListeConsultationComponent {
  listeConsultations: Consultation[] = [];


  

  constructor(private consultationService: ConsultationService) { }

  ngOnInit(): void {
    this.getListeConsultations();
  }

    getListeConsultations(): void {
    this.consultationService.getListeConsultations().subscribe(
      (consultations) => {
        this.listeConsultations = consultations;
        console.log(this.listeConsultations);
        console.log(this.listeConsultations);
        

      },
      (error) => {
        console.error('Erreur lors du chargement de la liste des consultations', error);
      }
    );
  }
}
