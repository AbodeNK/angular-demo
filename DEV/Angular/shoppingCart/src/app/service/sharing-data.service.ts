import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private deviceXS = new BehaviorSubject<boolean>(false);
  currentdeviceXS = this.deviceXS.asObservable();

  private deviceSM = new BehaviorSubject<boolean>(false);
  currentdeviceSM = this.deviceSM.asObservable();

  constructor() { }
  updatedeviceXS(deviceXS: boolean) {
    this.deviceXS.next(deviceXS)
    }
  updatedeviceSM(deviceSM: boolean) {
      this.deviceSM.next(deviceSM)
  }
}
