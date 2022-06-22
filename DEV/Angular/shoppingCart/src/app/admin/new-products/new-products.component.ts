import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, switchMap } from 'rxjs';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {

  newProducts=new FormGroup({
    title : new FormControl ('',[Validators.required,Validators.minLength(5)]),
    Price : new FormControl ('',[Validators.required]),
    // categories : new FormArray([]),
    imageURl : new FormControl ('',[Validators.required]),

  })

  constructor(private categories:CategoriesService) { }
  
  ngOnInit(): void {
  }
  get title(){
    return this.newProducts.get('title')
  }
  get Price(){
    return this.newProducts.get('Price')
  }
  // get categories(){
  //   return this.newProducts.get('categories') as FormArray
  // }
  get imageURl(){
    return this.newProducts.get('imageURl')
  }

  save(){

  }
  delet(){

  
  }


}
