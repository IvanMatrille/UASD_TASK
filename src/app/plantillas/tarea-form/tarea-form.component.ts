import { Component } from '@angular/core';
import { DashboardComponent } from 'src/app/vistas/dashboard/dashboard.component';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css']
})
export class TareaFormComponent {
  editarFormDash:boolean = false;

}
