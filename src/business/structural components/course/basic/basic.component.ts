import { Component, OnInit } from '@angular/core';;
import { ModalService } from 'src/services/modal.service';
import { ModalSetting } from '../../../model/modal-setting';
import { EnrollmentFormComponent } from '../../enrollment-form/enrollment-form.component';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
  standalone: false
})
export class BasicComponent implements OnInit {
  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }
  enrollNow() {
    const setting = new ModalSetting().setHeader("Test Header")
      .setComponentInput("name", "Suman")
      .setComponentInput("age", 30)
      .setCustomMessage("hello I am here")
      .setComponentRef(EnrollmentFormComponent);
    console.log(setting);
    this.modalService.show(setting);
  }
}
