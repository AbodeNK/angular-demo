import { Component, OnInit} from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {finalize } from 'rxjs/operators';
import { CategoriesService } from 'src/app/service/categories.service';
import { UplodImagesService } from 'src/app/service/uplod-images.service';


@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {
  newProducts=new FormGroup({
    ProductsName : new FormControl ('',[Validators.required,Validators.minLength(3)]),
    Price : new FormControl ('',[Validators.required]),
    categories : new FormControl('',[Validators.required]),
    imageURL : new FormControl ('',[Validators.required]),

  })


  constructor(private categories:CategoriesService,
   private uplodImageService:UplodImagesService,
    private storage:AngularFireStorage,
    ) { }
  
  ngOnInit(): void {
    this.newProducts.patchValue({imageURL: 'assets/images/empty.jpg'});
    
  }
  get ProductsName(){
    return this.newProducts.get('ProductsName')
  }
  get Price(){
    return this.newProducts.get('Price')
  }
  get categorie(){
    return this.newProducts.get('categories') 
  }
  get imageURL(){
    return this.newProducts.get('imageURL') 
  }

  save(){
   
    const{categories,ProductsName,Price,imageURL}=this.newProducts.value;
    const uid=ProductsName+Math.random()
    if(!this.newProducts.valid){
      return null;
    }else{  this.categories.addProduct({categories,ProductsName,Price,imageURL,uid}).subscribe;
   } 
   this.newProducts.reset();
  }
  
  uplodImage(event:any ){
      if(event.target.files[0]){
        const{categories,ProductsName}=this.newProducts.value;
        const Name= Math.random();
        const path ='image/products/'+categories+'/'+ProductsName+Name;
        const storageRef = this.storage.ref(path);
        this.uplodImageService.uplodImage(event.target.files[0],path).pipe(
        finalize(() => {
           storageRef.getDownloadURL().subscribe((url)=>{
           this.newProducts.patchValue({imageURL: url});
         })
        })
       ).subscribe()
      }else{
        this.newProducts.patchValue({imageURL: 'assets/images/empty.jpg'});
      }
  }

  


}
