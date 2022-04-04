import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private activityService: ActivityService,
    private router: Router
  ) { }

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
        f.Rut.includes(this.searchInput) ||
        f.Nombre.includes(this.searchInput) ||
        f.Empresa.includes(this.searchInput)
      )
    })
    console.log(this.actividades)
  }

  onClickGoToDashboard() {
    this.router.navigate(['dashboard'])
  }

  ngOnInit(): void {
    this.getActivities()

  }


}
