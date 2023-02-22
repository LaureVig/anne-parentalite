import { Component } from '@angular/core';
import { Prestation } from '../prestation';
import { PRESTATIONS} from '../textes-prestations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  public prestations!: Prestation[]

  ngOnInit():void{
    this.prestations = PRESTATIONS;
  }
}
