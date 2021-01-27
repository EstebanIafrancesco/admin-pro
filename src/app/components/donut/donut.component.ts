import { Component } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent  {

 // Doughnut
 public doughnutChartLabels: Label[] = [
  'Download Sales',
  'In-Store Sales',
  'Mail-Order Sales',
];
public doughnutChartData: MultiDataSet = [
  [350, 450, 100]
];
public colors: Color[] = [
  {backgroundColor:['#6857E6','#009FEE','#F02059']}
];

}
