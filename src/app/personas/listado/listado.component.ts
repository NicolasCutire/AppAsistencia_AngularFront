import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  
  personas:string []  = ['Pedro','Juan','Antonio','Milenna','Estrella'];
  personas2:any[]=[{nombre:'pedro',apellidos:'Dominguez',asistencia:''},
                  {nombre:'juan',apellidos:'Perez',asistencia:''},
                  {nombre:'jacobo',apellidos:'Quispe',asistencia:''},
                  {nombre:'Cersar',apellidos:'Achahui',asistencia:''},
                  {nombre:'Gabriela',apellidos:'Farfan',asistencia:''}];
  PersonaBorrado:string = '';
  borrarPersona() {    
    this.PersonaBorrado = this.personas.shift()||'';          
  }
  guardarAsistencia(){
    console.log(this.personas2);
  }

}
