import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
})
export class PersonaComponent implements OnInit {

  nombre: string = 'Julian';
  edad: number = 19;

  constructor() { }

  ngOnInit(): void {
  }

  get nombreCapitalizado(){
    return this.nombre.toUpperCase();
  }
  obetenerNombre():string{
      return `${this.nombre} - ${this.edad}`;
  }
  cambiarNombre():void{
      this.nombre = 'Patricio';
  }
  cambiarEdad():void{
      this.edad = 34;
}

}
