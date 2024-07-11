import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {

  productForm: FormGroup;

  @Input() ProductId: string = '';
  product: any = {};

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private apiService: ApiService
  ) {

    this.productForm = this.fb.group({
      description: [''],
      price: [''],
      quantity: ['']
    });
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.apiService.getProductById(productId).subscribe((data: any) => {
        this.productForm.patchValue(data);
      });
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const breedId = this.route.snapshot.paramMap.get('id');
      if (breedId) {
        this.apiService.updateProduct(breedId, this.productForm.value).subscribe(response => {
          console.log(response);
          // Aquí puedes redirigir o mostrar un mensaje de éxito
        });
      }
    }
  }

}
