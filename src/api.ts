export interface Proyecto {
  nombre: string;
  tareasCompletadas: number;
  bugsReportados: number;
  horasRegistradas: number;
}

export async function fetchProjectMetrics(): Promise<Proyecto[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          nombre: 'Proyecto Angular',
          tareasCompletadas: 42,
          bugsReportados: 5,
          horasRegistradas: 120,
        },
        {
          nombre: 'Dashboard Web',
          tareasCompletadas: 30,
          bugsReportados: 2,
          horasRegistradas: 80,
        },
        {
          nombre: 'API Backend',
          tareasCompletadas: 55,
          bugsReportados: 8,
          horasRegistradas: 200,
        },
      ]);
    }, 1000);
  });
}