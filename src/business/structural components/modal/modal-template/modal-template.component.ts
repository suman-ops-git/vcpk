import { AfterViewInit, Component, ComponentRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalSetting } from 'src/business/model/modal-setting';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrl: './modal-template.component.css'
})
export class ModalTemplateComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() setting: ModalSetting | undefined;
  @Output() customAction = new EventEmitter<string>();
  @ViewChild('innerComponentHost', { read: ViewContainerRef, static: true })
  public innerComponentHost!: ViewContainerRef;

  private innerComponentRef: ComponentRef<any> | null = null;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    if (this.setting?.componentRef) {
      this.loadInnerComponent();
    }
  }

  private loadInnerComponent(): void {
    this.clearInnerComponent();
    this.innerComponentRef = this.innerComponentHost.createComponent(this.setting?.componentRef);
    if (this.setting?.componentInput) {
      Object.assign(this.innerComponentRef.instance, this.setting.componentInput);
    }
    if (this.innerComponentRef.instance.customAction) {
      this.innerComponentRef.instance.customAction.subscribe((data: string) => {
        console.log('Received innerAction from dynamically loaded component:', data);
        this.emitCustomEvent();
      });
    }
  }

  private clearInnerComponent(): void {
    if (this.innerComponentRef) {
      this.innerComponentRef.destroy();
      this.innerComponentRef = null;
    }
    this.innerComponentHost?.clear();
  }

  public closeModal(result: string): void {
    this.bsModalRef.hide();
    this.bsModalRef.content.modalResult = result;
    this.clearInnerComponent();
  }

  public emitCustomEvent(): void {
    this.customAction.emit('Custom action from dynamic component!');
  }

  ngOnDestroy(): void {
    this.clearInnerComponent();
  }
}
