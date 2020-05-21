import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../services/proyectos.service';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../interfaces/proyecto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  API_ENDPOINT = 'http://localhost/pruebas_auth/public/api/';
  proyectos: Proyecto[];

  constructor(private proyectosService: ProyectosService, private httpClient: HttpClient) { 
    httpClient.get(this.API_ENDPOINT + 'proyectos').subscribe((data: Proyecto[]) => {
      this.proyectos = data;
    });
  }

  ngOnInit(): void {
  }

}
