import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MediaChange,MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { SharingDataService } from './service/sharing-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'shoppingCart';
  mediaSub: Subscription;
  deviceXS:boolean;
  deviceSM:boolean;
  deviceMD:boolean;
  deviceLG:boolean;
  deviceXL:boolean;
  constructor(@Inject(DOCUMENT) 
  private document: Document, 
  private rederer:Renderer2,
  public mediaObserver:MediaObserver ,
  private sharingData :SharingDataService,
  ){
    
  }
  isDarkMode(darkMode:boolean){
    const hostClass = darkMode ?'darkMode' : '';
    this.rederer.setAttribute(this.document.body,'class',hostClass);
    
  }
  ngOnInit(): void {
    this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      this.deviceSM=result.mqAlias === 'sm'? true :false;
      this.sharingData.updatedeviceSM(this.deviceSM);
    })
    this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      this.deviceXS=result.mqAlias === 'xs'? true :false;
      this.sharingData.updatedeviceXS(this.deviceXS);
    })
    this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      this.deviceMD=result.mqAlias === 'md'? true :false;
      this.sharingData.updatedeviceMD(this.deviceMD);
    })
    this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      this.deviceLG=result.mqAlias === 'lg'? true :false;
      this.sharingData.updatedeviceLG(this.deviceLG);
      console.log(result.mqAlias)
    })
    this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      this.deviceXL=result.mqAlias === 'xl'? true :false;
      this.sharingData.updatedeviceXL(this.deviceXL);
    })
    
    
   
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
    
  }
}
