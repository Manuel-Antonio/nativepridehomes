import { Component } from '@angular/core';
import { SERVICES } from 'src/app/data/services.data';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[] = [];

  ngOnInit(): void {
    this.services = SERVICES;
  }
}
