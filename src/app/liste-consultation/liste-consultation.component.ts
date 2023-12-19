import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from 'src/models/consultation';
import { ConsultationService } from 'src/services/consultation.service';

@Component({
  selector: 'app-liste-consultation',
  templateUrl: './liste-consultation.component.html',
  styleUrl: './liste-consultation.component.scss'
})
export class ListeConsultationComponent implements OnInit{
  listeConsultations: Consultation[] = [];

  errorMessage = '';
  successMessage = '';

  constructor(private consultationService: ConsultationService,
     private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getListeConsultations();
    this.route.queryParams.subscribe(params => {
      this.successMessage = params['successMessage'];
    });
  }

    getListeConsultations(): void {
    this.consultationService.getListeConsultations().subscribe(
      (consultations) => {
        this.listeConsultations = consultations;
      },
      (error) => {
        console.error('Erreur lors du chargement de la liste des consultations', error);
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

  deleteConsultation(id: number){
    this.consultationService.supprimerConsultation(id).subscribe(
      () => {
        console.log('Suppression réussit. ');
        this.refreshConsultations();
      },
      error  => {
        console.log('Erreur lors de la suppression : ', error);
      }
    );
  }

  confirmDelete(id: number): void{
    const result = confirm('Êtes-vous sûr de vouloir supprimer cette consultation ?');
    if(result){
      this.deleteConsultation(id);
      this.refreshConsultations();
    }
  }
  editConsultation(consultationId: number): void {
    this.router.navigate(['/modifierConsultation', consultationId]);
  }

}