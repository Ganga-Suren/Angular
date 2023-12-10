import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: ProductsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'wishlist', component: WishlistComponent},
      { path: 'payment', component: PaymentPageComponent},
    ]
  },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminManagementComponent,
    children: [
      // { path: 'customers', component: CustomersComponent },
      // { path: 'orders', component: OrdersComponent },
      // { path: 'partners', component: PartnersComponent },
      // { path: 'info', component: InfoComponent },
      // { path: '', redirectTo: 'customers', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
