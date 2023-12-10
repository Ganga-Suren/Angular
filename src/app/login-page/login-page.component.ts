import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  userType: string = "customer";

  constructor(private router: Router) {}

  onLogin() {
    // Logic to check user type and redirect
    if (this.userType === 'customer') {
      this.router.navigate(['/home']);
    } else if (this.userType === 'admin') {
      this.router.navigate(['/admin']);
    }
  }
}
