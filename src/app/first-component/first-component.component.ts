import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  @Input()
  productID: number = 0;
  @Input()
  productName: String = '';
  @Input()
  productCategory: String = '';
  @Input()
  productPrice: number = 0.0;
  @Input()
  productURL: String = '';
  toCart: boolean = false;
  // inside a class, 'let' or 'var' or 'const', we don't need to type before a variable
  // we are binding this variable to our html

  constructor() {}

  ngOnInit(): void {}
  ShoppingCart(): void {
    this.toCart = !this.toCart;
  }
}
