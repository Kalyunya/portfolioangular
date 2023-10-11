import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-test',
  templateUrl: './pipes-test.component.html',
  styleUrls: ['./pipes-test.component.css'],
  // selector: 'app-pipes-test',
  // template:'<div>uppercase: {{str | uppercase }}</div> <div>lowercase: {{str | lowercase} }</div> <div>number: {{num | number}}</div><div>percent: {{num | percent}}</div><div>currency: {{num | currency}}</div>'
})
export class PipesTestComponent {
    title = "PipesTestComponent"
    str = 'Hello World';
    num = 0.14;
    str1 = 'London is the capital of Great Britian.'
    
  }
