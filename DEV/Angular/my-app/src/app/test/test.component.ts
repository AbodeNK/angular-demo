import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '..//Service/service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  test;
  icon = false;
  tittel: any;
  viewMode='map';
  @Input('aktive') aktives:boolean ;
  @Input('likeCount') likeCount:number=10 ;

  constructor( service:ServiceService) {
    this.test = service.getTest();
   }

  ngOnInit(): void {
  }
  onclick(){
    this.icon= !this.icon;
  }

  onclickt(){
   this.likeCount += (this.aktives) ? -1 : 1;
  /*  if (this.aktive==true) {
      this.likeCount -=1;
    } else {
      this.likeCount +=1;
    }*/
    this.aktives =! this.aktives;
  }


}
