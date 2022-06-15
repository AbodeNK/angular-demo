import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-neu-test',
  templateUrl: './neu-test.component.html',
  styleUrls: ['./neu-test.component.scss']
})
export class NeuTestComponent implements OnInit {
 
 text:string;
search:string;
textarry:string;
htmlToAdd:any;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

 keyup(){
var texts:any =this.text.split(' ');
 for(var i=0; i<texts.length;i++){
  if(texts[i] ===this.search){
    //texts[i]= texts[i].replace( texts[i],'<span class="serche">'+ texts[i]+'</span>');
    texts[i]='<span class="bg-warning">'+ texts[i]+'</span>';
       }
       

  }
  
  this.htmlToAdd=texts.join(' ');
  this.textarry = texts.join(' ');
  console.log(this.textarry)
 }
 adminLink(){
  this.route.navigate(['/admin'],{
  

  })
}
logout(){
  
}

}

