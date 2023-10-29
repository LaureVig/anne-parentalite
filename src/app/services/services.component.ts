import {Component} from '@angular/core';
import {Prestation} from '../prestation';
import {ServicesService} from '../services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  public prestations !: Prestation[];

  constructor(private servicesService: ServicesService) {
  }

  ngOnInit(): void {
    this.prestations = this.servicesService.prestations;
  }


}
