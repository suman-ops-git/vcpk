import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { ObservableService } from '../../../services/observable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isAuthenticate: boolean = false;

  constructor(private authService: AuthService, private observableService: ObservableService) { }

  ngOnInit(): void {
    this.observableService.loginValue.subscribe(value => {
      this.isAuthenticate = value;
      console.log('Login value:', value);
    });
  }

  logout() {
    this.authService.logout();
  }
}