import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../interfaces/proyecto';
import { ProyectosService } from '../services/proyectos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  proyecto: Proyecto = {
    nombre: null,
    duracion: null,
  };

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
  }

  guardarProyecto(){
    console.log(this.proyecto);
    this.proyectosService.guardarProyecto(this.proyecto).subscribe((data) => {
      alert('Proyecto Guardado');
      console.log(data);
    }, (error) => {
      alert("Ha ocurrido un error");
      console.log(error);
    });

  }

}
