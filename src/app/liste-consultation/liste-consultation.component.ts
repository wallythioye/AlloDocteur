import { Component, OnInit } from '@angular/core';
import { Consultation } from 'src/models/consultation';
import { ConsultationService } from 'src/services/consultation.service';

@Component({
  selector: 'app-liste-consultation',
  templateUrl: './liste-consultation.component.html',
  styleUrls: ['./liste-consultation.component.scss']
})
export class ListeConsultationComponent implements OnInit {
  listeConsultations: Consultation[] = [];

  constructor(private consultationService: ConsultationService) { }

  ngOnInit(): void {
    this.chargeListeConsultations();
  }

  chargeListeConsultations(): void {
    this.consultationService.getListeConsultations().subscribe(
      (consultations) => {
        this.listeConsultations = consultations;
      },
      (error) => {
        console.error('Erreur lors du chargement de la liste des consultations', error);
      }
    );
  }
}
