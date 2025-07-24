import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enrollment-form',
  templateUrl: './enrollment-form.component.html',
  styleUrl: './enrollment-form.component.css'
})
export class EnrollmentFormComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() age: string | undefined;
  @Output() customAction = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.name)
    console.log(this.age)
  }

  onClickName() {
    this.customAction.emit("Hi I am from inner")
   }

}