import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GaleryComponent } from './galery/galery.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReviewsComponent } from './reviews/reviews.component'
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';

// import { AppComponent } from './app.component';



const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'galery', component: GaleryComponent},
  {path: '', component: PortfolioComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'contact', component: ContactComponent },
  {path: 'order', component: OrderComponent },
  {path: 'orderList', component: OrderListComponent },
  // {path: '', component: AppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot( routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
