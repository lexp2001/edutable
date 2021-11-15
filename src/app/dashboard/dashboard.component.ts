import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  lineChart: any
  barChart: any

  constructor(private router: Router) { }

  onClickGoToTable() {
    this.router.navigate(['table'])
    console.log("clicked")
  }

  loadChart() {
    new Chart(this.lineChart, {
      type: 'line',
      data: {
        datasets: [
          {
            data: [21, 28, 49, 35, 42],
            label: '24 horas',
            backgroundColor: '#76BEE4',
            tension: 0.3,
            //borderColor: 'red'
          }
        ],
        labels: [
          '0',
          '25',
          '50',
          '75',
          '100'
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    }),
      new Chart(this.barChart, {
        type: 'bar',
        data: {
          datasets: [
            {
              data: [21, 28, 49, 70],
              label: 'Usuarios',
              backgroundColor: '#B29DFF',
              //borderColor: 'red'
            }
          ],
          labels: [
            '24 horas',
            'Semana',
            'Quincena',
            'Mes']
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      })
  }

  ngOnInit(): void {
    this.lineChart = document.getElementById('lineChart')
    this.barChart = document.getElementById('barChart')
    Chart.register(...registerables)
    this.loadChart()
  }

}
