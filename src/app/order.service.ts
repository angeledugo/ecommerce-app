import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private API_URL = 'http://localhost:8002';

  constructor(
    private http: HttpClient
  ) { }

  getOrders(): Observable<any> {
    return this.http.get(`${this.API_URL}/order`);
  }

  getDetalle(id: string): Observable<any> {
    return this.http.get(`${this.API_URL}/order/${id}`);
  }

  updateOrder(id: string, order: any): Observable<any> {
    return this.http.put(`${this.API_URL}/order/${id}`, order);
  }

  deleteOrder(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/order/${id}`);
  }

  createOrder(order: any): Observable<any> {
    return this.http.post(`${this.API_URL}/order`, order);
  }
}