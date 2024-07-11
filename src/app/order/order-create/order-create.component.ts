import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule , ActivatedRoute, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { OrderService } from '../../order.service';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-order-create',
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './order-create.component.html',
  styleUrl: './order-create.component.scss'
})
export class OrderCreateComponent {
  orderForm: FormGroup;
  productos: any[] = [];

  constructor(
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
  }

  cargarProductos() {
    this.apiService.getProducts().subscribe((data: any) => {
      this.productos = data;
    });
  }


  onSubmit() {
    if (this.orderForm.valid) {
      this.orderService.createOrder(this.orderForm.value).subscribe(() => {
        this.router.navigate(['/orders']);
      });
    }
  }
}
