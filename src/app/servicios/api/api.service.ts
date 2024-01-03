import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { responseI } from '../../modelos/response.interface';
import { TareaI } from 'src/app/modelos/tarea.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "https://localhost:7291/api/";

  constructor(private http:HttpClient) { }

  loginByNickName(form:LoginI):Observable<responseI>{
    let direccion = this.url + "Usuario/login";
//    console.log(form);

    const headers = {
      'Content-Type': 'application/json'
    }

    const body = JSON.stringify(form);

    return this.http.post<responseI>(direccion, body, { headers });
  }

  getAll():Observable<TareaI[]>{
    let direccion = this.url + "Tareas";
    return this.http.get<TareaI[]>(direccion);
  }

  getTarea(id:any):Observable<TareaI>{
    let direccion = this.url + "Tareas/" + id;
    return this.http.get<TareaI>(direccion);    
  }

  postTarea(form:TareaI):Observable<responseI>{
    let direccion = this.url + "Tareas"
    console.log(form)
    return this.http.post<responseI>(direccion, form);
  }

}