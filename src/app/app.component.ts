import { Component, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts'; // <-- Importa el módulo

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgChartsModule], // <-- Agrega aquí el módulo
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng2-charts-demo';

  // Propiedad para almacenar las métricas de los proyectos
  projectMetrics: any[] = [];
    // Datos y configuración para el gráfico de barras
  barChartLabels: string[] = ['Proyecto A', 'Proyecto B', 'Proyecto C'];
  barChartData = {
    labels: this.barChartLabels,
    datasets: [
      { data: [12, 19, 7], label: 'Tareas Completadas' }
    ]
  };
  barChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Tareas Completadas por Proyecto' }
    }
  };
    // Datos y configuración para el gráfico de líneas
  lineChartLabels: string[] = ['Proyecto A', 'Proyecto B', 'Proyecto C'];
  lineChartData = {
    labels: this.lineChartLabels,
    datasets: [
      { data: [3, 8, 2], label: 'Bugs Reportados' }
    ]
  };
  lineChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Bugs Reportados por Proyecto' }
    }
  };
  ngOnInit(): void {
    this.fetchProjectMetrics();
  }

  fetchProjectMetrics(): void {
    // Aquí se implementará la lógica para obtener las métricas
    // Por ahora, puede dejarse vacío o simular datos
  }
}
