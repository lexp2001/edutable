import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chart: any

  constructor(private router: Router) { }

  onClickGoToTable() {
    this.router.navigate(['table'])
    console.log("clicked")
  }

  loadChart() {
    new Chart(this.chart, {
      type: 'line',
      data: {
        datasets: [
          {
            data: []
          }
        ]
      }
    })
  }

  ngOnInit(): void {
    this.chart = document.getElementById('myChart')
    Chart.register(...registerables)
    this.loadChart()
  }

}
