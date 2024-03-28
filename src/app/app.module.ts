import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
