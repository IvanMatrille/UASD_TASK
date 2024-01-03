import { Component } from '@angular/core';
import { DashboardComponent } from 'src/app/vistas/dashboard/dashboard.component';
import { UsuariosService } from 'src/app/servicios/api/usuarios.service';
import { ApiService } from 'src/app/servicios/api/api.service';
import { UsuarioI } from 'src/app/modelos/usuario.interface';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaI } from 'src/app/modelos/tarea.interface';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css']
})
export class TareaFormComponent {
  editarFormDash: boolean = false;
  usuarios: UsuarioI[] = [];
  tarea: TareaI = { idTarea: '', descripcion: '', detallesproceso: '', idusuariocreador: '', estado: '', date: '', };

  tareaForm = new FormGroup({
    'descripcion': new FormControl('', Validators.required),
    'idusuariocreador': new FormControl('', Validators.required)
  });
  constructor(private api: ApiService, private apiUsuario: UsuariosService, private activerouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let tareaId = this.activerouter.snapshot.paramMap.get('id');

    //Obtener la tarea para llenar el form


    if (tareaId) {
      this.api.getTarea(tareaId).subscribe(data => {
        this.tarea = data;

        this.tareaForm.setValue({
          'descripcion': this.tarea.descripcion,
          'idusuariocreador': this.tarea.idusuariocreador
        })
      })

      console.log("Con parametro");
    
    } else {
      console.log("Sin parametro");
    }

    //Obtener todos los usuarios para llenar el Select
    this.apiUsuario.getAll().subscribe(data => {
      this.usuarios = data;
    })

  }

  // Guarda la tarea
  postForm(form:FormGroup){    
    //console.log(form.value)

    this.tarea.descripcion= this.tareaForm.get('descripcion')?.value;
    this.tarea.idusuariocreador = this.tareaForm.get('idusuariocreador')?.value;
    this.tarea.estado = 0;

    this.api.postTarea(this.tarea).subscribe( data => {
      console.log(data)
    })
      
  }
}