import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';
import { Prestation } from '../prestation';

@Component({
  selector: 'app-details-prestation',
  templateUrl: './details-prestation.component.html',
  styleUrls: ['./details-prestation.component.scss']
})
export class DetailsPrestationComponent {
  prestation!:Prestation;
  constructor(private ServicesService: ServicesService,
              private route:ActivatedRoute) {}

  ngOnInit(){
    const prestationId = +this.route.snapshot.params['id'];
    this.prestation = this.ServicesService.getPrestationById(prestationId);
  }
}
