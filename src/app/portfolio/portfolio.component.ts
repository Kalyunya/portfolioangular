import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
 
  showContact(ev:any){
    console.log(ev.target);
    console.log(ev.target.value);
    console.log(ev.kayCode);
  }
  showContactTwo(event:any){
    console.log(event.target);
    console.log(event.target.value);
    console.log(event.kayCode);
  }
}
