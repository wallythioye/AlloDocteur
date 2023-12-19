
export interface Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  sexe: string;
  age: number;
  adresse: string;
  telephone: string;
  password: string;
  email: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  enabled: boolean;
}
