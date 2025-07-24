import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
    selector: 'app-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.css'],
    standalone: false
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
