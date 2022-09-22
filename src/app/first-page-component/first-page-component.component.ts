import { Component, OnInit } from '@angular/core';
import { Menu } from '../Model/Menu';

@Component({
  selector: 'app-first-page-component',
  templateUrl: './first-page-component.component.html',
  styleUrls: ['./first-page-component.component.scss'],
})
export class FirstPageComponentComponent implements OnInit {
  placeholderForMenu: Array<Menu> = [
    {
      productID: 1,
      productName: 'Vegetable Pizza',
      productCategory: 'Pizza',
      productPrice: 15.99,
      productURL:
        'https://www.twopeasandtheirpod.com/wp-content/uploads/2021/03/Veggie-Pizza-8-500x375.jpg',
    },
    {
      productID: 2,
      productName: 'Spaggetti with Meatballs',
      productCategory: 'Pasta',
      productPrice: 20.99,
      productURL:
        'https://www.onceuponachef.com/images/2019/09/Spaghetti-and-Meatballs.jpg',
    },
    {
      productID: 3,
      productName: 'Ginger Ale',
      productCategory: 'Beverage',
      productPrice: 2.99,
      productURL:
        'https://i5.walmartimages.com/asr/8cbf8110-ecea-43c9-8413-b7b87db9c9d8.28687c53f829d380dfbc174cea22f157.jpeg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
