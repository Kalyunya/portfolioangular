import { Component, OnInit } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];
  newName: string = '';
  newEmail: string = '';
  newPhone: string = '';
  newMessage: string = '';

  ngOnInit(): void {
    // Ініціалізуйте масив orders порожнім
  }

  addOrder(): void {
    const newOrder = new Order(this.newName, this.newEmail, this.newPhone, this.newMessage);
    this.orders.push(newOrder);

    // Очистіть поля вводу
    this.newName = '';
    this.newEmail = '';
    this.newPhone = '';
    this.newMessage = '';
  }
}
