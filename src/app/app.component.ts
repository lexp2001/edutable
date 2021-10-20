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

  public actividades: Activity[] = []
  public todasAct: Activity[] = []
  public searchInput = ""

  constructor(public activityService: ActivityService) { }

  getActivities() {
    this.activityService.getActivities()
      .subscribe(data => {
        this.actividades = data
        this.todasAct = data
        console.log(this.actividades)
      })
  }

  onClickSubmit() {
    console.log(this.searchInput)
    this.actividades = this.todasAct.filter(f => {
      return (
        f.rut.includes(this.searchInput) ||
        f.nombre.includes(this.searchInput) ||
        f.empresa.includes(this.searchInput)
        )
    })
    console.log(this.actividades)
  }

  ngOnInit(): void {
    this.getActivities()

  }

}
