import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page-component',
  templateUrl: './first-page-component.component.html',
  styleUrls: ['./first-page-component.component.scss'],
})
export class FirstPageComponentComponent implements OnInit {
  t1: String = 'Alpha';
  t2: String = 'Beta';
  t3: String = 'Gamma';
  t4: String = 'Delta';
  t5: String = 'Echo';

  constructor() {}

  ngOnInit(): void {}
}
