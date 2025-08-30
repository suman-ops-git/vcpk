import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { ObservableService } from '../../../services/observable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false
})
export class HeaderComponent {
  menuOpen = false;
  courseOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    // Close the course dropdown if the main menu is closed
    if (!this.menuOpen) {
      this.courseOpen = false;
    }
  }

  toggleCourse(event: Event) {
    event.preventDefault(); // Prevents the link from navigating
    this.courseOpen = !this.courseOpen;
  }
}