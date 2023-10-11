import { Component, OnInit } from '@angular/core';
import { Review } from '../rewiev';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  newReviewTitle: string = ''; // Поле для зберігання заголовка
  newReviewContent: string = ''; // Поле для зберігання відгуку

  ngOnInit(): void {
    // Ініціалізуйте масив reviews порожнім
  }

  addReview(): void {
    const newReview = new Review(this.newReviewTitle, this.newReviewContent, 0);
    this.reviews.push(newReview);
  
    // Очистіть поля вводу
    this.newReviewTitle = '';
    this.newReviewContent = '';
  }
}


// export class ReviewsComponent implements OnInit {
//   reviews: Review[] = [];
//   constructor() { }

//   ngOnInit(): void {
    
//   }
// }
