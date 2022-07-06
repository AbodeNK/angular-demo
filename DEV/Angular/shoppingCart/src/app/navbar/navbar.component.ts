import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../data/ShoppingCart';
import { AuthServiceService } from '../service/auth-service.service';
import { ShopingCartService } from '../service/shoping-cart.service';
import { UserDateService } from '../service/user-date.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output()
  readonly isDark = new EventEmitter<boolean>();
  @Input() deviceXS:boolean;
  @Input() deviceSM:boolean;
   user$ = this.userDate.userProfileDate;
   cart$: Observable<ShoppingCart>;
  constructor(private authService:AuthServiceService,
    private router:Router,
    private userDate:UserDateService,
    private shoppingCartService:ShopingCartService
    ) { }

  async ngOnInit(): Promise<void> {
    this.cart$ = await this.shoppingCartService.getCart();
  }
  isDarkModeSwitched({checked}:MatSlideToggleChange){
    this.isDark.emit(checked);
  }
  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['']);

    });
  }
}
