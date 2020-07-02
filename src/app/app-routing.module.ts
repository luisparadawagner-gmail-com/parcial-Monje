import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargarAlumnoComponent } from './componentes/cargar-alumno/cargar-alumno.component';
import { ConsultarInscripcionesComponent } from './componentes/consultar-inscripciones/consultar-inscripciones.component';

const routes: Routes = [
  {path: 'cargar-alumno-component', component: CargarAlumnoComponent},
  {path: 'consultar-inscripciones-component', component: ConsultarInscripcionesComponent},
  { path: '', redirectTo: 'consultar-inscripciones-component', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
