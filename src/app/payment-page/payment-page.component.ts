import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css'
})
export class PaymentPageComponent {
  
  constructor(private service: ApiService) {}
  paymentSuccessfull: boolean = false;

  onSubmit(): void {
    this.paymentSuccessfull = true;
    this.service.emptyCart()
  }
}
