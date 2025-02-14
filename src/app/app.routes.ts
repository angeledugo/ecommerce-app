import { Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: ProductListComponent },
    { path: 'products/create', component: ProductCreateComponent },
    { path: 'products/:id', component: ProductDetailComponent },

    { path: 'orders', component: OrderListComponent },
    { path: 'orders/create', component: OrderCreateComponent },
    { path: 'orders/:id', component: OrderDetailsComponent },
    
];
