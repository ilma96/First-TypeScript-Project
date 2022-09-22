import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  @Input()
  title: String = '';
  x: number = 0;
  // inside a class, 'let' or 'var' or 'const', we don't need to type before a variable
  // we are binding this variable to our html

  constructor() {}

  ngOnInit(): void {}

  increment(): void {
    this.x = this.x + 1;
  }
}
