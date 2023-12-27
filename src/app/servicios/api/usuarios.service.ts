import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { responseI } from '../../modelos/response.interface';
import { UsuarioI } from 'src/app/modelos/usuario.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url: string = "https://localhost:7291/api/";

  constructor(private http:HttpClient) { }

  getAll():Observable<UsuarioI[]>{
    let direccion = this.url + "Usuario";
    return this.http.get<UsuarioI[]>(direccion);
  }}
