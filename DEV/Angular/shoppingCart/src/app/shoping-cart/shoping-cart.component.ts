import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, throwError } from 'rxjs';
import { productData } from '../data/newProductsData';
import { ShoppingCart } from '../data/ShoppingCart';
import { ShopingCartService } from '../service/shoping-cart.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent implements OnInit, AfterViewInit {
  cart$: Observable<ShoppingCart>;
    displayedColumns: string[] = ['imageURL', 'ProductsName', 'Price','edit','totalPrice'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
     dataSource;
  constructor(private shoppService:ShopingCartService, public dialog: MatDialog) { }

 async ngOnInit() {
  this.cart$ = await this.shoppService.getCart();
   
  }
 async ngAfterViewInit() {
    (await this.shoppService.getcartItem()).subscribe(data=>{
      this.dataSource =new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
    } );
    
  
  }

  addToCart(product:productData){
  
    this.shoppService.addToCart(product);


 
 }


 removeFromCart(product) {
   this.shoppService.removeFromCart(product);

 }
 clearCart() {
  this.shoppService.clearCart();
}

}
