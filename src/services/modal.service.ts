import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalSetting } from 'src/business/model/modal-setting';
import { ModalTemplateComponent } from 'src/business/structural components/modal/modal-template/modal-template.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }

  public show(setting: ModalSetting) {

    const initialState: ModalOptions = {
      initialState: { setting },
      class: setting.modalSize
    };

    this.bsModalRef = this.modalService.show(ModalTemplateComponent, initialState);

    this.bsModalRef.onHide?.subscribe((reason?: string) => {
      console.log(`Modal hidden: ${reason}`);
      if (this.bsModalRef?.content?.modalResult) {
        console.log('Modal result from content:', this.bsModalRef.content.modalResult);
      }
    });

    if (this.bsModalRef.content) {
      this.bsModalRef.content.customAction.subscribe((data: string) => {
        console.log('Custom action from dynamic modal component received:', data);
        // You could potentially close the modal here based on the action
        // this.bsModalRef?.hide();
      });
    }
  }
}
