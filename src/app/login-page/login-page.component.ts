import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  userType: string = "customer";
  form!: FormGroup;
  signUpForm!: FormGroup;
  isSingUp: boolean = false;
  customers: any[] = [];

  constructor(private router: Router, private fb: FormBuilder, private snackBar: MatSnackBar, private service: ApiService) { }

  ngOnInit() {
    // For Validation
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      mobilePhone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });

    // Custom validator to check if passwords match
    this.signUpForm.get('confirmPassword')?.setValidators(this.passwordMatchValidator.bind(this));
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.service.getCustomers().subscribe({
      next: (data) => (this.customers = data),
      error: (error) => (console.error('Error loading customers:', error)),
      complete: () => console.log('Complete')
    });
  }

  // Function to get form controls for easier access in the template
  get suf() {
    return this.signUpForm.controls;
  }

  get f() {
    return this.form.controls;
  }

  private showNotification(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // 3 seconds
    });
  }

  onLogin(): void {
    if (this.form.valid) {
      // Handle form submission or API call here
      const formData = this.form.value;
      // Logic to check user type and redirect
      const existCustomer = this.customers.find(customer =>
        customer.firstName == this.form.value.username)
      if ((this.form.value.username === existCustomer?.firstName) && (this.form.value.username !== "Admin")) {
        this.router.navigate(['/home']);
        this.showNotification('Logged in Successfully');
        this.service.setCurrentCustomer(existCustomer);
      } else if (this.form.value.username === 'admin') {
        this.router.navigate(['/admin']);
        this.showNotification('Logged in successfully');
      } else {
        this.showNotification('User not exists..Please Signup to continue');
      }
      console.log('Form data:', formData);
    } else {
      // Form is invalid, handle accordingly
      console.log('Form is invalid');
      this.showNotification('Invalid username & password');
    }
  }

  // Custom validator function
  private passwordMatchValidator(control: any): { [key: string]: boolean } | null {
    const password = this.signUpForm.get('password')?.value;
    const confirmPassword = control.value;

    return password === confirmPassword ? null : { 'passwordMismatch': true };
  }

  onSignup(event: Event) {
    event.preventDefault();
    if (this.signUpForm.valid) {
      const formData = {
        firstName: this.signUpForm.value.firstName,
        lastName: this.signUpForm.value.lastName,
        mobilephone: this.signUpForm.value.mobilePhone,
        email: this.signUpForm.value.email,
        customerName: this.signUpForm.value.firstName,
        passwordHash: this.signUpForm.value.password
      };
      this.service.signUp(formData).subscribe(response => {
        console.log('API response:', response);
        this.signUpForm.reset();
      }, error => {
        console.error('Error submitting form:', error);
      });
      console.log('Sign up Form data:', formData);
      this.isSingUp = false;
      this.router.navigate(["/login"]);
      this.showNotification('Hurray!!Successfully created an account, Please login to continue :-)');
    } else {
      // Form is invalid, handle accordingly
      console.log('sign up Form is invalid');
    }
  }

  onSingUpClick() {
    this.isSingUp = true;
    this.router.navigate(['/login'])
  }

  

}
