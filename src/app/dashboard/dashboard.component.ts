import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js'
import * as apex from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  lineChart: any
  barChart: any

  series!: apex.ApexAxisChartSeries
  chart!: apex.ApexChart
  title!: apex.ApexTitleSubtitle
  plotOptions!: apex.ApexPlotOptions

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

  initializeApexChartOptions() {
    this.title = {
      text: 'Title'
    }
    this.series = [{
      name: 'Name 1',
      type: 'boxPlot',
      data: [
        {
          x: 'Jan 2015',
          y: [54, 66, 69, 75, 88]
        },
        {
          x: 'Jan 2016',
          y: [43, 65, 69, 76, 81]
        },
        {
          x: 'Jan 2017',
          y: [31, 39, 45, 51, 59]
        },
        {
          x: 'Jan 2018',
          y: [39, 46, 55, 65, 71]
        },
        {
          x: 'Jan 2019',
          y: [29, 31, 35, 39, 44]
        },
        {
          x: 'Jan 2020',
          y: [41, 49, 58, 61, 67]
        },
        {
          x: 'Jan 2021',
          y: [54, 59, 66, 71, 88]
        }
      ]
    }]
    this.chart = {
      type: 'boxPlot',
    }
    this.plotOptions = {
      boxPlot: {
        colors: {
          upper: '#5C4742',
          lower: '#A5978B'
        }
      }
    }
  }

  ngOnInit(): void {
    this.lineChart = document.getElementById('lineChart')
    this.barChart = document.getElementById('barChart')
    Chart.register(...registerables)
    this.loadChart()
    this.initializeApexChartOptions()
  }

}
