import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-sources',
  templateUrl: './data-sources.component.html',
  styleUrls: ['./data-sources.component.css'],
})
export class DataSourcesComponent implements OnInit {
  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];
  products: any = [];

  constructor() {}

  ngOnInit(): void {
    this.products = [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
      },
    ];
  }
}
