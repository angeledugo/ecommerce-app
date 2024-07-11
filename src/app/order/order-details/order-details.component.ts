import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule , ActivatedRoute, Router} from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { OrderService } from '../../order.service';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
  orderForm: FormGroup;
  productos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private orderService: OrderService,
    private apiService: ApiService
  ) {



    this.orderForm = this.fb.group({
      totalPrice: [''],
      quantity: [''],
      productId: [''],
    });
  }

  ngOnInit(): void {
    this.cargarProductos();
    const orderId = this.route.snapshot.paramMap.get('id');
    if (orderId) {
      this.orderService.getDetalle(orderId).subscribe((data: any) => {
        this.orderForm.patchValue(data);
      });
    }
  }

  cargarProductos() {
    this.apiService.getProducts().subscribe((data: any) => {
      this.productos = data;
    });
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      const orderId = this.route.snapshot.paramMap.get('id');
      if (orderId) {
        this.orderService.updateOrder(orderId, this.orderForm.value).subscribe(response => {
          this.router.navigate(['/orders']);
          // Aquí puedes redirigir o mostrar un mensaje de éxito
        });
      }
    }
  }

}
