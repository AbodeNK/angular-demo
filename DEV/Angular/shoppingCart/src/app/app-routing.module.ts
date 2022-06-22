import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { OrderComponent } from './admin/order/order.component';
import { ProductsManageComponent } from './admin/products-manage/products-manage.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './log/login/login.component';
import { SingUpComponent } from './log/sing-up/sing-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ShopProductComponent } from './shop/shop-product/shop-product.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { UseManageOrderComponent } from './user/use-manage-order/use-manage-order.component';
import { UserOrderComponent } from './user/user-order/user-order.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserSttingComponent } from './user/user-stting/user-stting.component';
import { canActivate,redirectLoggedInTo,redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AdminServiceService } from './service/admin-service.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { NewProductsComponent } from './admin/new-products/new-products.component';

const redirectLogged = () => redirectUnauthorizedTo(['/login'])
const redirecthoem = ()=> redirectLoggedInTo([''])


const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'shopp',component:ShopProductComponent
  },
  {
    path:'checkOut',component:CheckOutComponent,
    ...canActivate(redirectLogged)
  },
  {
    path:'orderSuccess',component:OrderSuccessComponent
  },
  {
    path:'shoppingCart',component:ShopingCartComponent
  },
  {
    path:'user',component:UserProfileComponent,
    ...canActivate(redirectLogged)
  }, 
  {
    path:'user/order',component:UserOrderComponent,
    ...canActivate(redirectLogged)
  },
  {
    path:'user/setting',component:UserSttingComponent,
    ...canActivate(redirectLogged)
  },
  {
    path:'admin',component:AdminComponent,
    ...canActivate(redirectLogged,),
     canActivate:[AdminServiceService]
  },
  {
    path:'admin/order',component:OrderComponent,
    ...canActivate(redirectLogged,),
    canActivate:[AdminServiceService]
  },
  {
    path:'admin/manageOrder',component:UseManageOrderComponent,
    ...canActivate(redirectLogged,),
    canActivate:[AdminServiceService]
  },
  {
    path:'admin/products',component:ProductsManageComponent,
    ...canActivate(redirectLogged,),
    canActivate:[AdminServiceService]
  },
  {
    path:'admin/newProducts',component:NewProductsComponent,
    ...canActivate(redirectLogged,),
    canActivate:[AdminServiceService]
  },
  {
    path:'login',component:LoginComponent,
    ...canActivate(redirecthoem)
  },
  {
    path:'signUP',component:SingUpComponent,
    ...canActivate(redirecthoem)

  },
  {
    path:'**',component:NotFoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AdminServiceService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
