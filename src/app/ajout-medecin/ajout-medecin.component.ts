import { Component } from '@angular/core';
import { Medecin } from 'src/models/medecin';
import { MedecinService } from 'src/services/medecin-service.service';

@Component({
  selector: 'app-ajout-medecin',
  templateUrl: './ajout-medecin.component.html',
  styleUrls: ['./ajout-medecin.component.scss']
})
export class AjoutMedecinComponent {
  nouveauMedecin: Medecin = {
    id:0,
    nom: '',
    prenom: '',
    adresse:'',
    age:0,
    sexe:'',
    telephone:'',
    prescriptions: [], 
    rendezvous: [],
    specialite:'',
    email:'',
    profil:'',
    password:'',
    statut:0,
    
  };

  constructor(private medecinService: MedecinService) {}

  ajouterNouveauMedecin(): void {
    this.medecinService.ajouterMedecin(this.nouveauMedecin).subscribe(
      {
        next: (nouveauMedecin: any) => {
          console.log('Médecin ajouté avec succès :', nouveauMedecin);
          
        },
        error: (err: any) => {
          console.error('Erreur lors de l\'ajout du médecin :', err);
        }
      }
    );
  }
}
