import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myorg-sp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {}
  list = [];
  ngOnInit(): void {
    this.list.push(
      {
        name: 'NetGear Wi-Fi',
        price: 29,
        category: 'Electronics',
      },
      {
        name: 'Apple iMac',
        price: 589,
        category: 'Electronics',
      },
      {
        name: 'Wireless Keyboard and Mouse Combo',
        price: 34.99,
        category: 'Electronics',
      },
      {
        name: 'Insignia™ - 80mm Case Cooling Fan - Black',
        price: 4.99,
        category: 'Hardware',
      },
      {
        name: 'WD - Easystore 5TB External USB 3.0 Portable Hard Drive - Black',
        price: 99.99,
        category: 'Hardware',
      },

      {
        name: 'Microsoft Office Home & Student 2019',
        price: 99.99,
        category: 'Software',
      },
      {
        name: 'Nutribullet Juicer PRO™ - Silver',
        price: 149.99,
        category: 'Home',
      }
    );
  }
}
