import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarInmuebleComponent } from '../administracion/inmueble/buscar-inmueble/buscar-inmueble.component';
import { CrearInmuebleComponent } from '../administracion/inmueble/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from '../administracion/inmueble/editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from '../administracion/inmueble/eliminar-inmueble/eliminar-inmueble.component';

const routes: Routes = [
  {
    path: 'crear-inmueble',
    component: CrearInmuebleComponent
  },
  {
    path: 'editar-inmueble',
    component: EditarInmuebleComponent
  },
  {
    path: 'buscar-inmueble',
    component: BuscarInmuebleComponent
  },
  {
    path: 'eliminar-inmueble', 
    component: EliminarInmuebleComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmuebleRoutingModule { }
