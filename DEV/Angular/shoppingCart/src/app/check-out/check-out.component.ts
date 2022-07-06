import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../data/ShoppingCart';
import { ShopingCartService } from '../service/shoping-cart.service';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  cart$: Observable<ShoppingCart>;
  constructor(
    private shoppingCartService: ShopingCartService,

    ) {  }

  async ngOnInit() {

    this.cart$ = await this.shoppingCartService.getCart();
  }


}
