import { Component, OnInit } from '@angular/core';
import { TareaI } from 'src/app/modelos/tarea.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { UsuariosService } from 'src/app/servicios/api/usuarios.service';
import { UsuarioI } from 'src/app/modelos/usuario.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  tareas: TareaI[] = [];
  usuarios: UsuarioI[] = [];
  mostrarDatos: boolean = false; // Usar *ngIf, si la tarea tiene id mostar los datos en detalle, si la variable es true mostrar el id en el form.
  idTarea: any = 0;
  tarea: TareaI = { idTarea: '', descripcion: '', detallesproceso: '', idusuariocreador: '', estado: '', date: '', };
  opcionesSeleccionadas: string[] = [];

  constructor(private api: ApiService, private apiUsuario: UsuariosService) { }

  ngOnInit(): void {
    this.api.getAll().subscribe(data => {
      //console.log(data)
      this.tareas = data;
    })

    this.apiUsuario.getAll().subscribe(data => {
      this.usuarios = data;
    })

  }

  Guardar(){
    console.log("Descripcion de la tarea: " + this.tarea.descripcion);
  }

  EditarTarea(id: any) {
    console.log(id)
  }

  nuevaTarea() {

  }

  update(tarea: TareaI) {
    this.mostrarDatos = true;
    //console.log("Tarea seleccionada " + tarea.idTarea);

    this.tarea = tarea;
  }

  actualizarOpcionesSeleccionadas() {
    // En este punto, this.opcionesSeleccionadas contiene las opciones seleccionadas
    console.log('Opciones seleccionadas:', this.opcionesSeleccionadas);
  }

  limpiar() {
    console.log("limpiar");
    this.mostrarDatos = false;
    //this.tarea.descripcion = '';
    this.tarea = { idTarea: '', descripcion: '', detallesproceso: '', idusuariocreador: '', estado: '', date: '', };

  }



}


