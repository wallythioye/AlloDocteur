import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DossierMedicale } from 'src/models/dossierMedicale';
import { DossierMedicalService } from 'src/services/dossier-medical-service.service';

@Component({
  selector: 'app-mes-dossier-medical',
  templateUrl: './mes-dossier-medical.component.html',
  styleUrls: ['./mes-dossier-medical.component.scss']
})
export class MesDossierMedicalComponent implements OnInit {
  dossiersMedicaux: DossierMedicale[] = [];
  idPatient: number | null = null; 

  constructor(
    private dossierMedicalService: DossierMedicalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idPatient = this.route.snapshot.params['id']; // 'id' correspond au nom du paramètre dans l'URL

    if (this.idPatient) {
      this.getMesDossiersMedicaux(this.idPatient);
    }
  }

  getMesDossiersMedicaux(idPatient: number): void {
    this.dossierMedicalService.getDossierMedicalByPatientId(idPatient).subscribe(
      (dossiers: DossierMedicale[]) => {
        this.dossiersMedicaux = dossiers;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des dossiers médicaux du patient :', error);
      }
    );
  }
}
