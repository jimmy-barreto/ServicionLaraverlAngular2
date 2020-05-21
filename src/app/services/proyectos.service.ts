import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Proyecto } from '../interfaces/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  
  API_ENDPOINT = 'http://localhost/pruebas_auth/public/api/';

  constructor(private httpClient: HttpClient) { }

  guardarProyecto(proyecto: Proyecto){
    const HEADERS = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + 'guardarProyecto', proyecto, {headers: HEADERS});
        
  }
}
