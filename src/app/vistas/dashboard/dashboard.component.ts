import { Component, OnInit } from '@angular/core';
import { TareaI } from 'src/app/modelos/tarea.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { UsuariosService } from 'src/app/servicios/api/usuarios.service';
import { UsuarioI } from 'src/app/modelos/usuario.interface';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  /*tareaForm = new FormGroup({
    descripcion: new FormGroup(''),
    idusuariocreador: new FormGroup(''),
    estado: new FormGroup('')
  });*/

  tareaForm = new FormGroup({
    'descripcion': new FormControl('', Validators.required),
    'idusuariocreador': new FormControl('', Validators.required)
  });

  tareas: TareaI[] = [];
  usuarios: UsuarioI[] = [];
  mostrarDatos: boolean = false; // Usar *ngIf, si la tarea tiene id mostar los datos en detalle, si la variable es true mostrar el id en el form.
  idTarea: any = 0;
  tarea: TareaI = { idTarea: '', descripcion: '', detallesproceso: '', idusuariocreador: '', estado: '', date: '', };
  datosTarea: TareaI = { idTarea: '', descripcion: '', detallesproceso: '', idusuariocreador: '', estado: '', date: '', };
  opcionesSeleccionadas: string[] = [];

  constructor(private api: ApiService, private apiUsuario: UsuariosService, private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.api.getAll().subscribe(data => {
      //console.log(data)
      this.tareas = data;      
    })

    this.api.getTarea(1).subscribe(data => {
      this.datosTarea = data;
      //console.log(this.datosTarea )
     // console.log(this.tareaForm.value);
    })


    this.apiUsuario.getAll().subscribe(data => {
      this.usuarios = data;
    })

  }

  postTarea() {
    //this.api.postTarea(form);    
    this.tarea.descripcion = this.tareaForm.get('descripcion')?.value;
    this.tarea.idusuariocreador = this.tareaForm.get('idusuariocreador')?.value;

    console.log("descripcion: " + this.tarea);
  }

  EditarTarea(id: any) {
    console.log("Editar: " + id)
    this.router.navigate(['tarea-form', id])
  }

  NuevaTarea() {
    console.log("Nueva Tarea")
    this.router.navigate(['tarea-form', ""])
  }

  update(tarea: TareaI) {
    this.mostrarDatos = true;
    
    this.tareaForm.setValue({
      'descripcion': this.tarea.descripcion,
      'idusuariocreador': this.tarea.idusuariocreador
    })

    console.log("Tarea seleccionada " + tarea.idTarea);

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


