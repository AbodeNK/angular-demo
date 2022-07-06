import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { productData } from 'src/app/data/newProductsData';
import { ShoppingCart } from 'src/app/data/ShoppingCart';
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
  @Input() shoppingCart: ShoppingCart
  cart: any;
  cart$: Observable<ShoppingCart>;
  constructor( 
    private firestore: AngularFirestore,
    private products:CategoriesService,
    private cartService:ShopingCartService,
    ) { }

  async ngOnInit() {
    this.products.getProducts().subscribe(data=> this.item$=data);

    this.cart$ = await this.cartService.getCart();
  
  

  }
  
  addToCart(product:productData){
  
     this.cartService.addToCart(product);
     this.cart=product.uid;
     return this.product=product;
  
  }


  removeFromCart(product) {
    this.cartService.removeFromCart(product);
   return this.product=product;
  }



 


 


}
