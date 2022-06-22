import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MediaChange,MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

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
  constructor(@Inject(DOCUMENT) 
  private document: Document, 
  private rederer:Renderer2,
  public mediaObserver:MediaObserver ){
    
  }
  isDarkMode(darkMode:boolean){
    const hostClass = darkMode ?'darkMode' : '';
    this.rederer.setAttribute(this.document.body,'class',hostClass);
    
  }
  ngOnInit(): void {
    this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias);
      this.deviceSM=result.mqAlias === 'sm'? true :false;
    })
    this.mediaSub=this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias);
      this.deviceXS=result.mqAlias === 'xs'? true :false;
    })
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
    
  }
}
