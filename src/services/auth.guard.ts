import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { ObservableService } from './observable.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private router: Router, private authService: AuthService, private observableService: ObservableService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = !!localStorage.getItem('token') || this.authService.isAuthenticated();
    console.log('AuthGuard: isAuthenticated:', isAuthenticated);
    this.observableService.setloginValue(isAuthenticated);
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
    }
    return isAuthenticated;
  }
}