import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { Activity } from './interfaces/activity.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eduTable';

  public users = [
    {
      "nombre": "Pedro Pablo Pérez Perales",
      "rut": "111111111",
      "empresa": "Boosmap",
      "tiempo": "20",
      "actividades": [
        {
          "nombre": "Selección de productos",
          "puntaje": "153",
          "estrellas": "0",
          "productos": [
            {
              "nombre": "Palta",
              "puntos": "52",
              "cantidadBien": "5",
              "cantidadMal": "2",
              "estrellas": 2
            },
            {
              "nombre": "Frutilla",
              "puntos": "33",
              "cantidadBien": "3",
              "cantidadMal": "3",
              "estrellas": 2
            },
            {
              "nombre": "Lechuga",
              "puntos": "14",
              "cantidadBien": "1",
              "cantidadMal": "4",
              "estrellas": 1
            },
            {
              "nombre": "Tomate",
              "puntos": "10",
              "cantidadBien": "1",
              "cantidadMal": "4",
              "estrellas": 1
            },
            {
              "nombre": "Plátano",
              "puntos": "20",
              "cantidadBien": "3",
              "cantidadMal": "2",
              "estrellas": 2
            }
          ]
        }
      ]
    },
    {
      "nombre": "Alejandro Aristóbulo Almeida Altamira",
      "rut": "111111111",
      "empresa": "Boosmap",
      "tiempo": "20",
      "actividades": [
        {
          "nombre": "Selección de productos",
          "puntaje": "153",
          "estrellas": "0",
          "productos": [
            {
              "nombre": "Palta",
              "puntos": "52",
              "cantidadBien": "5",
              "cantidadMal": "2",
              "estrellas": 2
            },
            {
              "nombre": "Frutilla",
              "puntos": "33",
              "cantidadBien": "3",
              "cantidadMal": "3",
              "estrellas": 2
            },
            {
              "nombre": "Lechuga",
              "puntos": "14",
              "cantidadBien": "1",
              "cantidadMal": "4",
              "estrellas": 1
            },
            {
              "nombre": "Tomate",
              "puntos": "10",
              "cantidadBien": "1",
              "cantidadMal": "4",
              "estrellas": 1
            },
            {
              "nombre": "Plátano",
              "puntos": "20",
              "cantidadBien": "3",
              "cantidadMal": "2",
              "estrellas": 2
            }
          ]
        },
        {
          "nombre": "Selección de productos",
          "puntaje": "153",
          "estrellas": "0",
          "productos": [
            {
              "nombre": "Palta",
              "puntos": "52",
              "cantidadBien": "5",
              "cantidadMal": "2",
              "estrellas": 2
            },
            {
              "nombre": "Frutilla",
              "puntos": "33",
              "cantidadBien": "3",
              "cantidadMal": "3",
              "estrellas": 2
            },
            {
              "nombre": "Lechuga",
              "puntos": "14",
              "cantidadBien": "1",
              "cantidadMal": "4",
              "estrellas": 1
            },
            {
              "nombre": "Tomate",
              "puntos": "10",
              "cantidadBien": "1",
              "cantidadMal": "4",
              "estrellas": 1
            },
            {
              "nombre": "Plátano",
              "puntos": "20",
              "cantidadBien": "3",
              "cantidadMal": "2",
              "estrellas": 2
            }
          ]
        }
      ]
    },
    {
      "nombre": "Luis Leandro Lopez Leal",
      "rut": "111111111",
      "empresa": "Boosmap",
      "tiempo": "20",
      "actividades": [
        {
          "nombre": "Selección de productos",
          "puntaje": "153",
          "estrellas": "0",
          "productos": [
            {
              "nombre": "Palta",
              "puntos": "52",
              "cantidadBien": "5",
              "cantidadMal": "2",
              "estrellas": 2
            },
            {
              "nombre": "Frutilla",
              "puntos": "33",
              "cantidadBien": "3",
              "cantidadMal": "3",
              "estrellas": 2
            },
            {
              "nombre": "Lechuga",
              "puntos": "14",
              "cantidadBien": "1",
              "cantidadMal": "4",
              "estrellas": 1
            },
            {
              "nombre": "Tomate",
              "puntos": "10",
              "cantidadBien": "1",
              "cantidadMal": "4",
              "estrellas": 1
            },
            {
              "nombre": "Plátano",
              "puntos": "20",
              "cantidadBien": "3",
              "cantidadMal": "2",
              "estrellas": 2
            }
          ]
        }
      ]
    },
    {
      "nombre": "Esteban Eduardo Escalona Espinoza",
      "rut": "111111111",
      "empresa": "Boosmap",
      "tiempo": "20",
      "actividades": [
        {
          "nombre": "Selección de productos",
          "puntaje": "153",
          "estrellas": "0",
          "productos": [
            {
              "nombre": "Palta",
              "puntos": "52",
              "cantidadBien": "5",
              "cantidadMal": "2",
              "estrellas": 2
            },
            {
              "nombre": "Frutilla",
              "puntos": "33",
              "cantidadBien": "3",
              "cantidadMal": "3",
              "estrellas": 2
            },
            {
              "nombre": "Lechuga",
              "puntos": "14",
              "cantidadBien": "1",
              "cantidadMal": "4",
              "estrellas": 1
            },
            {
              "nombre": "Tomate",
              "puntos": "10",
              "cantidadBien": "1",
              "cantidadMal": "4",
              "estrellas": 1
            },
            {
              "nombre": "Plátano",
              "puntos": "20",
              "cantidadBien": "3",
              "cantidadMal": "2",
              "estrellas": 2
            }
          ]
        }
      ]
    }
  ]

  public actividades: Activity[] = [{
    "nombre": "",
    "rut": "",
    "empresa": "",
    "tiempo": "",
    "actividades": [
      {
        "nombre": "",
        "puntaje": "",
        "estrellas": "",
        "productos": [{
          "nombre": "",
          "puntos": "",
          "cantidadBien": "",
          "cantidadMal": "",
          "estrellas": 0
        }]
      }
    ]
  }]

  constructor(public activityService: ActivityService) { }

  getActivities() {
    this.activityService.getActivities()
      .subscribe(data => {
        this.actividades = data
        console.log(this.actividades)
      })
  }

  onClickSubmit(data: Data) {
    let searchTerm = data.query
    console.log(searchTerm)
  }

  ngOnInit(): void {
    this.getActivities()
  }

}
