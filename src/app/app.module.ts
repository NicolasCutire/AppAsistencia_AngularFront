import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoComponent } from './personas/listado/listado.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { PersonasModule } from './personas/personas.module';

@NgModule({
  declarations: [
    AppComponent,        
  ],
  imports: [
    BrowserModule,
    PersonasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
