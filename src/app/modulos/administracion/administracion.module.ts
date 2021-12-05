import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { BuscarAsesorComponent } from './asesor/buscar-asesor/buscar-asesor.component';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './asesor/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './asesor/eliminar-asesor/eliminar-asesor.component';
import { CrearInmuebleComponent } from './inmueble/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmueble/editar-inmueble/editar-inmueble.component';
import { BuscarInmuebleComponent } from './inmueble/buscar-inmueble/buscar-inmueble.component';
import { EliminarInmuebleComponent } from './inmueble/eliminar-inmueble/eliminar-inmueble.component';


@NgModule({
  declarations: [
    CrearClienteComponent,
    EditarClienteComponent,
    EliminarClienteComponent,
    BuscarClienteComponent,
    BuscarAsesorComponent,
    CrearAsesorComponent,
    EditarAsesorComponent,
    EliminarAsesorComponent,
    CrearInmuebleComponent,
    EditarInmuebleComponent,
    BuscarInmuebleComponent,
    EliminarInmuebleComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
