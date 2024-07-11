import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = 'http://localhost:8001';

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<any> {
    return this.http.get(`${this.API_URL}/product`);
  }

  
  getProductById(product_id: string): Observable<any> {
    return this.http.get(`${this.API_URL}/product/${product_id}`);
  }

  updateProduct(id: string, product: any): Observable<any> {
    return this.http.put(`${this.API_URL}/product/${id}`, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/product/${id}`);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post(`${this.API_URL}/product`, product);
  }
}
