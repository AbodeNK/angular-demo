import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, OnInit, Renderer2 } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private rederer:Renderer2 ){
    
  }

  ngOnInit(): void {
   
  }
  isDarkMode(darkMode:boolean){
    const hostClass = darkMode ?'darkMode' : '';
    this.rederer.setAttribute(this.document.body,'class',hostClass);
    
  }

}

