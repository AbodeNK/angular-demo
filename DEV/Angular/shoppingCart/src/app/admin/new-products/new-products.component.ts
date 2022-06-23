import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, switchMap } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { CategoriesService } from 'src/app/service/categories.service';
import { SharingDataService } from 'src/app/service/sharing-data.service';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {

  newProducts=new FormGroup({
    ProductsName : new FormControl ('',[Validators.required,Validators.minLength(5)]),
    title : new FormControl ('',[Validators.required,Validators.minLength(5)]),
    Price : new FormControl ('',[Validators.required]),
    categories : new FormArray([]),
    imageURL : new FormControl ('',[Validators.required]),

  })
  deviceXS:boolean;
  deviceSM:boolean;

  constructor(private categories:CategoriesService,private sharingData:SharingDataService) { }
  
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
    return this.newProducts.get('categories') as FormArray
  }
  get imageURL(){
    return this.newProducts.get('imageURL')
  }

  save(){
    const{categories,ProductsName,Price,imageURL}=this.newProducts.value;
    if(!this.newProducts.valid){
      console.log('dont work');
      return null;
    }else{
      this.categories.addProduct({categories,ProductsName,Price,imageURL}).pipe().subscribe;
      console.log('is work');
    }

       
  }
  delet(){
    console.log(this.ProductsName)

  
  }


}
