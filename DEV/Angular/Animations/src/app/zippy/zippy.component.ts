import { Component, Input, OnInit } from '@angular/core';
import { expandcollaspe, fade, slide } from '../animations/animation';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations:[
    fade,
    slide,
    expandcollaspe,

  ]
})
export class ZippyComponent  {

   @Input('title') title: string;
  isExpanded: boolean;

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }

}
