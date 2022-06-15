import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,AbstractControl, ValidationErrors, FormArray} from '@angular/forms';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
    
  forms =new FormGroup({
    topics: new FormArray([])


  });
  addTopic(topic:HTMLInputElement){
    this.topics.push(new FormControl(topic.value));


  }
  //to do
  get topics(){
    return this.form.get('topics') as unknown as FormArray;
  };



  form = new FormGroup({
    comments : new FormControl('',[
      Validators.required,
      Validators.minLength(20),
      TestValidator.noSpace,
      TestValidator.isUseetName,
  
   ])
  
  });
  get comments(){
    return this.form.get('comments');
  };


 @Input ('title')title:string;
 isExp:boolean;
 contactMethod =[
 {id:1, name:'Email'},
 {id:2, name:'phon'},
 {id:3, name:'telphon'},

 ];


  constructor() { }

  ngOnInit(): void {
  }

  change(){
   this.isExp=!this.isExp;

  }

}

export class TestValidator{
 
 static noSpace(control: AbstractControl): ValidationErrors | null{
  if((control.value as string).indexOf('@')>=0){
  return { noSpace: true};
  }else{
    return null;
  } 
 }

 /*static isUseetName(control: AbstractControl): ValidationErrors | null{
  if(control.value ==='abdulaa '){
  return { isUseetName: true};
  }else{
    return null;
  } 
 }*/

 static isUseetName(control: AbstractControl): Promise< ValidationErrors | null>{
   return new Promise((resolve,reject)=>{
    setTimeout( () =>{
      if(control.value ==='abdulaa '){
        console.log(control.value)
        resolve({ isUseetName: true});
        
        }else{
          
          resolve(null) ;
        } 
     },2000);

   });
 
 }

}