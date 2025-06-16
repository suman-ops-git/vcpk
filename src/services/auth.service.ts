import { Injectable } from '@angular/core';
import { ObservableService } from './observable.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private observableService: ObservableService) { }

  private isAuthenticatedUser: boolean = false;

  isAuthenticated(): boolean {
    return this.isAuthenticatedUser || !!localStorage.getItem('token');
  }

  login(value?: any): void {
    this.isAuthenticatedUser = true;
    localStorage.setItem('token', value);
  }

  logout(): void {
    this.isAuthenticatedUser = false;
    localStorage.removeItem('token');
    this.observableService.setloginValue(false);
  }
}