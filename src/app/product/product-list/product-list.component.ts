import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    MatListModule,
    RouterModule,
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = [ 'description', 'price','quantity', 'viewDetails'];
  products: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

  deleteProduct(id: string): void {
    this.apiService.deleteProduct(id).subscribe((data: any) => {
      this.products = this.products.filter(product => product.id !== id);
    });
  }

}
