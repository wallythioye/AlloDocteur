import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from 'src/models/consultation';
import { Medecin } from 'src/models/medecin';
import { Patient } from 'src/models/patient';
import { ConsultationService } from 'src/services/consultation.service';

@Component({
  selector: 'modifier-consultation',
  templateUrl: './modifier-consultation.component.html',
  styleUrls: ['./modifier-consultation.component.scss'],
})
export class ModifierConsultationComponent implements OnInit {
  id!: number;
  consultation: Consultation = {
    id: 0,
    motif: '',
    antecedent: '',
    allergie: '',
    date: new Date(),
    groupeSanguin: '',
    diagnostic: '',
    poids: 0,
    taille: 0,
    profession: '',
    medecin: {} as Medecin,
    patient: {} as Patient,
    idPatient: 0,
  };

  listeConsultations: Consultation[] = [];

  errorMessage = '';
  successMessage = '';

  constructor(
    private consultationService: ConsultationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.getListeConsultations();
  }

  refreshConsultations(): void {
    this.consultationService.getListeConsultations().subscribe(
      {
        next: (consultations: Consultation[]) => {
          this.listeConsultations = consultations;
        },
        error: (err: any) => {
          this.errorMessage = 'Erreur de requête';
        },
        complete: () => {
          this.successMessage = 'Requête valide';
        },
      }
    );
  }

  getListeConsultations(): void {
    this.consultationService.getListeConsultations().subscribe(
      (consultations) => {
        this.listeConsultations = consultations;
        // Assurez-vous que la consultation actuelle est correctement initialisée
        this.consultation =
          this.listeConsultations.find((c) => c.id === this.id) || {
            id: 0,
            motif: '',
            antecedent: '',
            allergie: '',
            date: new Date(),
            groupeSanguin: '',
            diagnostic: '',
            poids: 0,
            taille: 0,
            profession: '',
            medecin: {} as Medecin,
            patient: {} as Patient,
            idPatient: 0,
          };
      },
      (error) => {
        console.error('Erreur lors du chargement de la liste des consultations', error);
      }
    );
  }

  updateConsultation() {
    this.consultationService.modifierConsultation(this.id, this.consultation)
    .subscribe((data: Consultation) => {
        console.log(data);
        // Mettez à jour la consultation si nécessaire
        this.gotoList();
      },
      (error: any) => console.log(error)
    );
  }

  onSubmit() {
    this.updateConsultation();
  }

  gotoList() {
    this.router.navigate(['/listeConsultation']);
  }
}
