import { Component, OnInit } from '@angular/core';
import { expandcollaspe, fade, slide } from '../animations/animation';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { timer } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
  animations:[
    fade,
    slide,
    expandcollaspe
  ]
})
export class MaterialComponent implements OnInit {
  isChecked:boolean;
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  colors=[
    {id:1,name:'yellow'},
    {id:2,name:'red'},
    {id:3,name:'blue'},
    {id:4,name:'white'},
    {id:5,name:'black'},
  
  ];
  categorys=[
    {name:'yellow'},
    {name:'red'},
    {name:'blue'},
    {name:'white'},
    {name:'black'},
  
  ];
  color=2;
  value = 'Username';

  // color1: ThemePalette = 'primary';
  // mode: ProgressSpinnerMode = 'determinate';
  // value1 = 50;
 
  // progress =0;
  // timer;
  isLoading=false;



  constructor(private dilog:MatDialog) {
  this.isLoading=true;
    this.getCourses().subscribe(x=>this.isLoading=false);
  
   }

 
  openDialog(){
    this.dilog.open(DialogComponent,{
      data:{courseId:1}
    }).
    afterClosed().
    subscribe(result=> console.log(result)
    )

  }
   getCourses(){
    return timer(5000)
   }

  ngOnInit(): void {
  }
  categoryScd(category){
   this.categorys.
   filter(c=>c!=category)
   .forEach(c=>c['selected']=false);
   category.selected=!category.select;
  }
  

}
export class openDilogs{
  
  

}