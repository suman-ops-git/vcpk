import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  private loginValueSubject = new BehaviorSubject<any>(null);
  loginValue = this.loginValueSubject.asObservable();

  setloginValue(value: any): void {
    this.loginValueSubject.next(value);
  }

}