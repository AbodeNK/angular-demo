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
  
    this.cartService.addToCart(product)
  }

 


}
