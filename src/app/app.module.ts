import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GraficoDeBarrasComponent } from './grafico-de-barras/grafico-de-barras.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent, // Importa aquí, NO en declarations
    GraficoDeBarrasComponent
  
  ],
  declarations: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }