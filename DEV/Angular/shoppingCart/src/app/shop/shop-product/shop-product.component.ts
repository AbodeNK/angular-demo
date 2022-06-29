import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { productData } from 'src/app/data/newProductsData';
import { CategoriesService } from 'src/app/service/categories.service';
import { ShopingCartService } from 'src/app/service/shoping-cart.service';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.scss']
})
export class ShopProductComponent implements OnInit {
  item$;
  @Input('product') product:productData;
  constructor( 
    private firestore: AngularFirestore,
    private products:CategoriesService,
    private cartService:ShopingCartService,
    ) { }

  ngOnInit(): void {
    this.products.getProducts().subscribe(data=> this.item$=data);
  }
  
  addToCart(product:productData){
    let cratID = localStorage.getItem('cartID');
    if(!cratID){
      this.cartService.addToCart().then(result=>{
        localStorage.setItem('cartID',result.id);
        //add product
      })
    
    }else{
      //add product
  
    }
  }

 


}
