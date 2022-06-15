
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { PostService } from '../Service/post.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent  {
  posts: any;
  update:string;

  constructor(private service:PostService ) {
    
 
   }
   ngOnInit(){

    this.service.getAll()
    .subscribe(
      responseType =>{
      this.posts = responseType ;
     console.log(this.posts);
     /* this.postBody = this.post.body;
      console.log(this.postBody);*/
      
    }, error => {
      console.log(error);
      alert('error');


   });
     
   }
   create(text:HTMLInputElement){
    
     let postObjct:any = {title:text.value};
     this.posts.splice(0,0,postObjct);

     text.value='';

     this.service.create(postObjct).
     subscribe(
       responseType =>{
      postObjct.id=  responseType;
       console.log(this.posts);

     }, error => {
      this.posts.splice(0,1);

      console.log(error);
      alert('error');


   });

  

    
   }
   updatePost(resours:HTMLElement){
    let updat= this.update;
    //let index:number=this.posts.indexOf(postObjct);
    //let postId:any = {id:index};
     this.service.patch(resours,updat).
     subscribe(
       responseType=>{
      console.log(responseType);
     }, error => {
       throw AppErrorHandler;


    });


  }
  deletePost(postObjct:HTMLElement){
    let index:number=this.posts.indexOf(postObjct);
    this.posts.splice(index,1);
  
     this.service.delete(postObjct).
     subscribe(
       responseType=>{
      
      
      
     }, (error:Response) => { 
      this.posts.splice(index,0,postObjct);

       if(error.status===404){
        
        alert('post is already delete');
       }else{
        console.log(error);
        alert('error');

        
       }
   });
  }


  

}
export class AppErrorHandler implements ErrorHandler{

  handleError(error: any) {
    console.log(error);
    alert('error');
    
  }
    


  
}
export class AppError{
  constructor(error:HttpErrorResponse){
    if(error.status===404){
        
      alert('post is already delete');
  
     }else{
      console.log(error);
      alert('error');
  
      
     }
  

  }

 
}
