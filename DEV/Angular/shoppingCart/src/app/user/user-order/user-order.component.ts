import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { OrderService } from 'src/app/service/order.service';
import { map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss']
})
export class UserOrderComponent implements OnInit {
  orders$;
  constructor(   private authService:AuthServiceService,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.orders$ = this.authService.currentUser$.pipe(
      switchMap((u) => {
        return this.orderService
          .getOrdersByUser(u.uid)
          .valueChanges({ idField: 'id' });
      })
    );
    
  }
  

}
