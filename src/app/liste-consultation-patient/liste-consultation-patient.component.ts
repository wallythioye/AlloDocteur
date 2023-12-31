import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from 'src/models/consultation';
import { ConsultationService } from 'src/services/consultation.service';

@Component({
  selector: 'app-liste-consultation-patient',
  templateUrl: './liste-consultation-patient.component.html',
  styleUrl: './liste-consultation-patient.component.scss'
})
export class ListeConsultationPatientComponent implements OnInit{
  listeConsultations: Consultation[] = [];

  errorMessage = '';
  successMessage = '';

  constructor(private consultationService: ConsultationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getListeConsultations();
    this.route.queryParams.subscribe(params => {
      this.successMessage = params['successMessage'];
      this.errorMessage = params['errorMessage'];
    });
  }

    getListeConsultations(): void {
    this.consultationService.getListeConsultations().subscribe(
      (consultations) => {
        this.listeConsultations = consultations;
      },
      (error) => {
        console.error('Erreur lors du chargement de la liste des consultations', error);
        this.errorMessage  = 'Erreur lors du chargement de la liste des consultations';
      }
    );
  }

  refreshConsultations(): void{
    this.consultationService.getListeConsultations().subscribe(
      {
        next: (consultations: Consultation[]) => {
          this.listeConsultations = consultations;
        },
        error: (err: any) => {
          this.errorMessage = 'Erreur de requêtte';
        },
        complete: () =>{
          this.successMessage = 'Requette valide';
        }
      }
    );
  }
}
