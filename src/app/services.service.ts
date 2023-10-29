import {Injectable} from '@angular/core';
import {Prestation} from './prestation';
import {PRESTATIONS} from './textes-prestations';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public prestations: Prestation[] = PRESTATIONS;

  constructor() {
  }

  getPrestationById(prestationId: number): Prestation {
    const prestation = this.prestations.find(prestation => prestation.id === prestationId);
    if (!prestation) {
      throw new Error('Pas de prestation');
    } else {
      return prestation;
    }
  }

  getAllPrestations(): Prestation[] {
    return this.prestations;
  }
}
