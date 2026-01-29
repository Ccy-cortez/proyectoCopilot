import { Component, Input } from '@angular/core';
import { NgChartsModule } from 'ng2-charts'; // <-- Importa el módulo

@Component({
  selector: 'app-grafico-de-barras',
  templateUrl: './grafico-de-barras.component.html',
  standalone: true,
  imports: [NgChartsModule] // <-- Agrega aquí el módulo
})
export class GraficoDeBarrasComponent {
  @Input() titulo: string = '';
  @Input() datos: { data: any, labels: any, options: any };
}
