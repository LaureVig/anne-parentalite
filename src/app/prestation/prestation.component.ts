import {Component, Input} from '@angular/core';
import {Prestation} from '../prestation';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent {
  @Input() prestation!: Prestation;

}
