import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { LoginI } from 'src/app/modelos/login.interface';
import { responseI } from 'src/app/modelos/response.interface';
import { AppRoutingModule } from '../../app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    nombreUsuario : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor(private api:ApiService, private router:Router){}

  errorStatus:boolean = false;
  errorMjs:any = "";

  ngOnInit(): void{
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('usuario')){
      this.router.navigate(['dashboard']);
    }
  }

  onLogin(form:any){
    this.api.loginByNickName(form).subscribe((data: any)=> {
      let dataResponse:responseI = data;
      
      if(dataResponse.status == "ok"){
        localStorage.setItem("usuario", JSON.stringify(dataResponse.response));
        //console.log("Usuario response: " + JSON.stringify(dataResponse.response));
        this.router.navigate(['dashboard']);

      } else {
        console.log("Error al consultar usuario: " + dataResponse.response);
        this.errorStatus = true;
        this.errorMjs = dataResponse.response;
      }

    }, (error: any) => {
      console.error("Error al realizar la solicitud:", error);
      this.errorStatus = true;
      this.errorMjs = "Error en la conexión con el servidor.";
    }
  );    
  }

}
