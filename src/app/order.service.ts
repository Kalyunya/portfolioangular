import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: any[] = [];

  addOrder(order: any) {
    this.orders.push(order);
  }

  getOrders() {
    return this.orders;
  }
}
