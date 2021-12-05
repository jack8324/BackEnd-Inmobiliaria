import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmuebleRoutingModule } from './inmueble-routing.module';
import { AsignarInmuebleComponent } from './asignar-inmueble/asignar-inmueble.component';


@NgModule({
  declarations: [
    AsignarInmuebleComponent
  ],
  imports: [
    CommonModule,
    InmuebleRoutingModule
  ]
})
export class InmuebleModule { }
