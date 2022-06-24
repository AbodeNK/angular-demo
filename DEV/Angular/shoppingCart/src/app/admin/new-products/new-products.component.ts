import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { productData } from 'src/app/data/newProductsData';
import { CategoriesService } from 'src/app/service/categories.service';
import { SharingDataService } from 'src/app/service/sharing-data.service';
import { UplodImagesService } from 'src/app/service/uplod-images.service';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {
  newProducts=new FormGroup({
    ProductsName : new FormControl ('',[Validators.required,Validators.minLength(5)]),
    Price : new FormControl ('',[Validators.required]),
    categories : new FormControl('',[Validators.required]),
    imageURL : new FormControl ('',[Validators.required]),

  })
  deviceXS:boolean;
  deviceSM:boolean;
  imagesUrl;

  constructor(private categories:CategoriesService,
    private sharingData:SharingDataService,
    private uplodImages:UplodImagesService,
    ) { }
  
  ngOnInit(): void {
    this.sharingData.currentdeviceXS.subscribe(XS=> this.deviceXS=XS);
    this.sharingData.currentdeviceSM.subscribe(SM=> this.deviceSM=SM);
   
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
    if(!this.newProducts.valid){
      return null;
    }else{  this.categories.addProduct({categories,ProductsName,Price,imageURL}).subscribe;
   }   
  }
  uplodImage(event:any ){
    const{categories}=this.newProducts.value;
      this.uplodImages.uplodImage(event.target.files[0],'image/products/'+categories+'/'+Math.random()).subscribe
  
  }
  
  // private async getUrl(snap:  firebase.storage.ListResult) {
  //   const url = await snap.ref.getDownloadURL();
  //   this.imagesUrl = url;  //store the URL
  //   console.log(this.imagesUrl);
  // }


}
