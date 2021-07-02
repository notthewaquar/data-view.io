import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.drawChart('myChart1');
    this.drawChart('myChart2');
    this.drawChart('myChart3');
    this.drawChart('myChart4');
    this.drawChart('myChart5');
    this.drawChart('myChart6');
    this.drawChart('myChart7');
    this.drawChart('myChart8');
    this.drawChart('myChart9');
    this.drawChart('myChart10');
  }

  drawChart(id: string) {
    var myChart = new Chart(id, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderRadius: 4,
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#aaa',
              font: {
                size: 10,
              },
            },
          },
          x: {
            ticks: {
              color: '#aaa',
              font: {
                size: 10,
              },
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 12,
              },
            },
          },
        },
      },
    });
  }
}
