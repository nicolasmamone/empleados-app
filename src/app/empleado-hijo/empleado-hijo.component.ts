import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent {
  @Input() empleadoH:Empleado;
  @Input() indice:number;

  constructor() { 
  }

  arrayCaracteristica = [''];
  agregarCaracteristica(newCaracteristica:string){
    this.arrayCaracteristica.push(newCaracteristica);
  }
}
