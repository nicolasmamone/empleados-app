import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private miServicio:ServicioEmpleadosService){}


  titulo = 'Listado de empleados';
  empleados:Empleado[] = [
    new Empleado('Juan', 'Perez', 'Gerente', 1000),
    new Empleado('Maria', 'Gomez', 'Analista', 800),
    new Empleado('Luis', 'Ramirez', 'Programador', 600),
    new Empleado('Ana', 'Torres', 'Tester', 500)
  ];

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje('Empleado agregado: ' + miEmpleado.nombre);
    this.empleados.push(miEmpleado);
    this.cuadroNombre="";
    this.cuadroApellido="";
    this.cuadroCargo="";
    this.cuadroSalario=0; 
  }


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
