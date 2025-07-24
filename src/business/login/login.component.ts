import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: false
})
export class LoginComponent implements OnInit {
  loginForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private authservice: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authservice.login(this.loginForm.value); // pass value to service
    console.log(this.loginForm.value);
    this.router.navigate(['/home']);
  }
}
