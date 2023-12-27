import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { EstudianteComponent } from './vistas/estudiante/estudiante.component';
import { ServicioComponent } from './vistas/servicio/servicio.component';
import { TareaComponent } from './vistas/tarea/tarea.component';
import { UsuarioComponent } from './vistas/usuario/usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'login' ,  pathMatch: 'full' },
  { path: 'login', component:LoginComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'estudiante', component:EstudianteComponent },
  { path: 'servicio', component:ServicioComponent },
  { path: 'tarea', component:TareaComponent },
  { path: 'usuario', component:UsuarioComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, EstudianteComponent, ServicioComponent, TareaComponent, UsuarioComponent]