import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { OrderService } from '../../order.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent {
  displayedColumns: string[] = [ 'totalPrice','quantity', 'viewDetails'];
  orders: any[] = [];

  
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data: any) => {
      this.orders = data;
    });
  }

  deleteOrder(id: string): void {
    this.orderService.deleteOrder(id).subscribe((data: any) => {
      this.orders = this.orders.filter(order => order.id !== id);
    });
  }
}
