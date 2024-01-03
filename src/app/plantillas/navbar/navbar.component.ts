import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

constructor(private router:Router){}

  rutaInicio(){
    this.router.navigate(['dashboard']);
  }

  rutaTarea(){
    this.router.navigate(['tarea']);
  }

  rutaServicios(){
    this.router.navigate(['servicio']);
  }

  rutaEstudiantes(){
    this.router.navigate(['estudiante']);
  }

}

