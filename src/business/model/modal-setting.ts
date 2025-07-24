export class ModalSetting {
  private _header: string | undefined;
  private _componentInput: { [key: string]: any; } = {};
  private _componentRef: any;
  private _modalSize: any = "modal-lg";
  private _customMessage: any | undefined;

  public get header(): string | undefined {
    return this._header;
  }
  public setHeader(value: string | undefined) {
    this._header = value;
    return this;
  }
  public get componentInput(): { [key: string]: any; } {
    return this._componentInput;
  }
  public setComponentInput(key: string, value: any) {
    this._componentInput[key] = value;
    return this;
  }
  public get componentRef(): any {
    return this._componentRef;
  }
  public setComponentRef(value: any) {
    this._componentRef = value;
    return this;
  }  
  public get modalSize(): any {
    return this._modalSize;
  }
  public setModalSize(value: any) {
    this._modalSize = value;
    return this;
  }
  public get customMessage(): any | undefined {
    return this._customMessage;
  }
  public setCustomMessage(value: any | undefined) {
    this._customMessage = value;
    return this;
  }

}