import { Component } from '@angular/core';
import { UsuarioI } from 'src/app/modelos/usuario.interface';
import { UsuariosService } from 'src/app/servicios/api/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  usuarios: UsuarioI[] = [];

  constructor(private api: UsuariosService) { }

  ngOnInit(): void {
    this.api.getAll().subscribe(data => {
      console.log(data)
      this.usuarios = data;
    })
  }

}
