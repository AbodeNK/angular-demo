import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { ShopingCartService } from '../service/shoping-cart.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent implements OnInit {
    cartItem;
  constructor(private shoppService:ShopingCartService) { }

  ngOnInit(): void {
    this.shoppService.getCart().valueChanges().subscribe(result=>{
       this.cartItem=result;
    })
    console.log(this.cartItem);
  }

}
