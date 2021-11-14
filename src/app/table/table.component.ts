import { Component, OnInit } from '@angular/core';
import { Activity } from '../interfaces/activity.interface';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

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
