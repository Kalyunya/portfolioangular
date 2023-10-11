import { Component } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  orders: any[] =[];
  newName: string = '';
  newEmail: string = '';
  newPhone: string = '';
  newMessage: string = '';

  constructor(private orderService: OrderService) {}

  addOrder(): void {
    const newOrder = {
      name: this.newName,
      email: this.newEmail,
      phone: this.newPhone,
      message: this.newMessage
    };

    this.orderService.addOrder(newOrder);

    // Очистіть поля вводу
    this.newName = '';
    this.newEmail = '';
    this.newPhone = '';
    this.newMessage = '';
  }
  
}
