import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/data/order';
import { ShoppingCart } from 'src/app/data/ShoppingCart';
import { OrderService } from 'src/app/service/order.service';
import { ShopingCartService } from 'src/app/service/shoping-cart.service';
import { UserDateService } from 'src/app/service/user-date.service';

@Component({
  selector: 'app-check-form',
  templateUrl: './check-form.component.html',
  styleUrls: ['./check-form.component.scss']
})
export class CheckFormComponent implements OnInit {

  userid;
  @Input() cart: ShoppingCart;
  shipping: any = {     
  };


  constructor(private userDataService:UserDateService,
    private orderService: OrderService,
    private router: Router
    ) {  }

  async ngOnInit() {
    this.userDataService.userProfileDate.subscribe(user=>{
      this.shipping ={...user};
    })
   
  }


  async placeOrder() {
    let order = new Order(this.shipping.uid, this.shipping, this.cart);
    let result = await this.orderService.placeOrder({ ...order });
    this.router.navigate(['/orderSuccess'],{ queryParams: { id: result.id } });
  }


}
