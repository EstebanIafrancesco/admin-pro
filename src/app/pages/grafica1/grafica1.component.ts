import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  public labels1: string[] = ['Pisos', 'Baños', 'Cocinas'];
  public data1 = [
    [350000, 45000, 100000]
  ];
  public labels2: string[] = ['Llantas', 'Multiherramienta', 'Mobiliario'];
  public data2 = [
    [12, 45, 100]
  ];
}
