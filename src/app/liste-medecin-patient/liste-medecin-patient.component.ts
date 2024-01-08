import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medecin } from 'src/models/medecin';
import { AdminServiceService } from 'src/services/admin-service.service';
import { MedecinService } from 'src/services/medecin-service.service';

@Component({
  selector: 'app-liste-medecin-patient',
  templateUrl: './liste-medecin-patient.component.html',
  styleUrl: './liste-medecin-patient.component.scss'
})
export class ListeMedecinPatientComponent implements OnInit {
  medecins: Medecin[] = [];
  searchTerm: string = '';

  errorMessage = '';
  successMessage = '';

  constructor(private medecinService: MedecinService,
     private adminService: AdminServiceService,
     private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getMedecins();
    this.route.queryParams.subscribe(params => {
      this.successMessage = params['successMessage'];
      this.errorMessage = params['errorMessage'];
    });
  }

  getMedecins(): void {
    this.medecinService.getMedecins().subscribe(
      (medecins: Medecin[]) => {
        this.medecins = medecins;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des médecins :', error);
        this.errorMessage = 'Erreur lors de la récupération des médecins';
      }
    );
  }
  refreshMedecin(): void {
    this.medecinService.getMedecins().subscribe(
      {
        next: (medecin: Medecin[]) => {
          this.medecins= medecin;
        },
        error: (err: any) => {
          this.errorMessage = "Erreur de requête";
        },
        complete: () => {
          this.successMessage = "Requête valide";
        }
      }
    );
  }
}
