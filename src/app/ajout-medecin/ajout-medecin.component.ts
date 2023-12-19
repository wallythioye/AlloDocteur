import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    rendezVous: [],
    consultations: [],
    planings: [],
    specialite:'',
    email:'',
    password:'',
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true,
    enabled: true

  };

  errorMessage = '';
  successMessage ='';

  constructor(private medecinService: MedecinService,
    private route: ActivatedRoute,
    private router: Router) {}

  ajouterNouveauMedecin(): void {
    this.medecinService.ajouterMedecin(this.nouveauMedecin).subscribe(
      {
        next: (nouveauMedecin) => {
          console.log('Médecin ajouté avec succès :', nouveauMedecin);
          this.gotoList('Médecin ajouté avec succès');
          
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout du médecin :', err);
          this.errorMessage = 'Erreur lors de l\'ajout du médecin';
        }
      }
    );
  }
  gotoList(successMessage: string): void {
    this.router.navigate(['/listeMedecin'], { queryParams: { successMessage } });
  }
}
