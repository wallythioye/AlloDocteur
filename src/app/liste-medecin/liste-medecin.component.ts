import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/models/medecin';
import { MedecinService } from 'src/services/medecin-service.service';

@Component({
  selector: 'app-liste-medecin',
  templateUrl: './liste-medecin.component.html',
  styleUrls: ['./liste-medecin.component.scss']
})
export class ListeMedecinComponent implements OnInit {
  medecins: Medecin[] = [];

  constructor(private medecinService: MedecinService) {}

  ngOnInit(): void {
    this.getMedecins();
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
}
