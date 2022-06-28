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
  
  private deviceMD = new BehaviorSubject<boolean>(false);
  currentdeviceMD = this.deviceMD.asObservable();
  
  private deviceLG = new BehaviorSubject<boolean>(false);
  currentdeviceLG = this.deviceLG.asObservable();

  private deviceXL = new BehaviorSubject<boolean>(false);
  currentdeviceXL = this.deviceXL.asObservable();

  constructor() { }
  updatedeviceXS(deviceXS: boolean) {
    this.deviceXS.next(deviceXS)
    }
  updatedeviceSM(deviceSM: boolean) {
      this.deviceSM.next(deviceSM)
  }
  updatedeviceMD(deviceMD: boolean) {
      this.deviceMD.next(deviceMD)
  }
  updatedeviceLG(deviceLG: boolean) {
      this.deviceLG.next(deviceLG)
  }
  updatedeviceXL(deviceXL: boolean) {
      this.deviceXL.next(deviceXL)
  }
}
