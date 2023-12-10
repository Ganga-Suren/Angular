import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { OrderPlacementComponent } from './order-placement/order-placement.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerManagementComponent,
    ProductManagementComponent,
    OrderPlacementComponent,
    HomeComponent,
    LoginPageComponent,
    AdminManagementComponent,
    ProductsComponent,
    CartComponent,
    PaymentPageComponent,
    WishlistComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    { 
      provide: HttpClient,
      useClass: HttpClient
    },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
