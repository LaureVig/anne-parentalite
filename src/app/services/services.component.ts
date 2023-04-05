import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Prestation } from '../prestation';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  public prestations !: Prestation[];

  ngOnInit(): void {
    this.prestations = this.servicesService.prestations;
  }
  constructor(private servicesService: ServicesService) { }


  }