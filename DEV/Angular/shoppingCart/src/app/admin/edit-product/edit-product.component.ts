import { Component, OnInit , Inject} from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { productData } from 'src/app/data/newProductsData';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {finalize } from 'rxjs/operators';
import { CategoriesService } from 'src/app/service/categories.service';
import { SharingDataService } from 'src/app/service/sharing-data.service';
import { UplodImagesService } from 'src/app/service/uplod-images.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  newProducts=new FormGroup({
    ProductsName : new FormControl ('',[Validators.required,Validators.minLength(3)]),
    Price : new FormControl ('',[Validators.required]),
    categories : new FormControl('',[Validators.required]),
    imageURL : new FormControl ('',[Validators.required]),

  })
  
  deviceXS:boolean;
  deviceSM:boolean;
  // imageSrc= this.uplodImages.imageUrl ;

  constructor(private categories:CategoriesService,
    private sharingData:SharingDataService,
   private uplodImageService:UplodImagesService,
    private storage:AngularFireStorage,
    public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    ) { }
  
  ngOnInit(): void {
    this.sharingData.currentdeviceXS.subscribe(XS=> this.deviceXS=XS);
    this.sharingData.currentdeviceSM.subscribe(SM=> this.deviceSM=SM);
    this.newProducts.patchValue({imageURL: 'assets/images/empty.jpg'});
    // console.log(this.imageSrc)
    const data=this.data;
    this.newProducts.setValue({
      ProductsName: data.ProductsName, 
      Price: data.Price ,
      categories:data.categories ,
      imageURL:data.imageURL , 
 
    }); 
    
   
    
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
    const uid=this.data.uid;
    if(!this.newProducts.valid){
      return null;
    }else{  this.categories.updateProduct({categories,ProductsName,Price,imageURL,uid}).subscribe;
   } 
   this.newProducts.reset();
   this.dialogRef.close();
  }
  delet(){
    const uid=this.data.uid;
    this.categories.deletProduct({uid}).subscribe;
    this.dialogRef.close();
  }
  onNoCick():void{
    this.dialogRef.close();
  }

  
  

}
