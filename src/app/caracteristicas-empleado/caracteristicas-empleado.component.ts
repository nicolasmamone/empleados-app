import { Component, Output, EventEmitter } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent {

  @Output() caracteristicasEmpleado = new EventEmitter<string>();

  constructor(private miServicio:ServicioEmpleadosService){}

  agregarCaracteristicas(value:string){
    this.miServicio.muestraMensaje(value);
    this.caracteristicasEmpleado.emit(value);

  }
}
