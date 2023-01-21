import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-grade',
  templateUrl: './info-grade.component.html',
  styleUrls: ['./info-grade.component.scss']
})
export class InfoGradeComponent implements OnInit {

  constructor() { }
  val3: number = 5;
  data: any = [

    {
      titulo : "Evolución tecnológica",
      description: "En esta unidad aprenderás a analizar y valorar críticamente las estrategias para el desarrollo de la tecnología.",
      content: [
        {
          titulo: "Evolución tecnológica",
          id_video: "NEzvnGbfljs"

        },
        {
          titulo: "Cambios estructurales de la sociedad",
          id_video: "DeVcWDzpq2c"

        },
        {
          titulo: "Cambios culturales de la sociedad",
          id_video: "2ti0Z81T_Jo"

        }
      ]
    },

    {
      titulo : "Introducción al curso",
      description: "Bienvenidos a este curso de bachillerato. Hemos analizado y valorado los componentes tecnológicos.En esta oportunidad aprenderemos sobre las estrategias para el desarrollo de la tecnología.",
      introduction: true,
    },


    {
      titulo : "Componentes de los sistemas tecnológicos",
      description: "En esta unidad aprenderás a analizar y valorar críticamente los componentes de los distintos sistemas tecnológicos.",
      content: [
        {
          titulo: "Tecnologías que solucionen",
          id_video: "PKfLwe2oM9w"

        },
        {
          titulo: "Sistemas de control",
          id_video: "1sKPy-FIgog"

        },
        {
          titulo: "La meteorología en los procesos tecnológicos",
          id_video: "ZsP5Cv__Llc"

        },
        {
          titulo: "La calidad",
          id_video: "_GaFPUGnM7I"

        }
      ]
    },
    {
      titulo : "Estrategias para el desarrollo de la tecnología",
      description: "En esta unidad aprenderás a analizar y valorar críticamente las estrategias para el desarrollo de la tecnología.",
      content: [
        {
          titulo: "proyectos de investigación, desarrollo e innovación",
          id_video: "OfsekEabQ4o"

        },
        {
          titulo: "desarrollos tecnológicos",
          id_video: "Ug4u-0AUP90"

        },
        {
          titulo: "Tecnología y otras disciplinas",
          id_video: "mcy6t6SJKDo"

        },
        {
          titulo: "Ciencia y tecnología",
          id_video: "iW9hp_Y-PdU"

        }
      ]
    },
    // {
    //   titulo : "Principios de funcionamiento",
    //   description: "Desde hoy iniciaremos el módulo de apropiación y uso de la tecnología del área de Tecnología e informática en el entorno tecnológico.",
    //   content: [
    //     {
    //       titulo: "El mantenimiento - 1",
    //       id_video: "x9JVvqm9aqE"

    //     },
    //     {
    //       titulo: "El mantenimiento - 2",
    //       id_video: "yTMId3P-6Wk"

    //     },
    //     {
    //       titulo: "Seguridad industrial",
    //       id_video: "uK0NaOdLj3o"

    //     },
    //     {
    //       titulo: "Interpretación de planos",
    //       id_video: "y0nr9iUyKtA"

    //     },
    //     {
    //       titulo: "Seguridad y salud en el trabajo",
    //       id_video: "y6jhr7QLNug"

    //     },
    //     {
    //       titulo: "Trabajo colaborativo",
    //       id_video: "WruRGvjDVDE"

    //     }
    //   ]
    // },
    // {
    //   titulo : "Criterio de selección",
    //   description: "Desde hoy iniciaremos el módulo de apropiación y uso de la tecnología del área de Tecnología e informática en el entorno tecnológico",
    //   content: [
    //     {
    //       titulo: "Sistemas informáticos",
    //       id_video: "tN6-KziOBzg",
    //       url_video: "https://www.youtube.com/watch?v=tN6-KziOBzg"
    //     },
    //     {
    //       titulo: "Herramientas informáticas",
    //       id_video: "YBcuyAc1Ph8",
    //       url_video: "https://www.youtube.com/watch?v=YBcuyAc1Ph8"
    //     },
    //     {
    //       titulo: "Instrumentos tecnológicos para medir",
    //       id_video: "e9XOFPVJnuU",
    //       url_video: "https://www.youtube.com/watch?v=e9XOFPVJnuU"
    //     },
    //     {
    //       titulo: "Energías amigables",
    //       id_video: "Pt4lkCUWiWw",
    //       url_video: "https://www.youtube.com/watch?v=Pt4lkCUWiWw"
    //     },
    //   ]
    // },
    {
      test: true,
      titulo: "REALIZAR EXAMEN",
      link: ""
    }

  ]
  currentData: any;
  ngOnInit(): void {
    this.currentData = this.data[0];

  }

  getCurrentData(event: any){
    this.currentData = event;
  }

}
