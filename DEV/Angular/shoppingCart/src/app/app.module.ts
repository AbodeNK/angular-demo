import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCModule } from './material-c.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserSttingComponent } from './user/user-stting/user-stting.component';
import { UserOrderComponent } from './user/user-order/user-order.component';
import { LoginComponent } from './log/login/login.component';
import { SingUpComponent } from './log/sing-up/sing-up.component';
import { UseManageOrderComponent } from './user/use-manage-order/use-manage-order.component';
import { OrderComponent } from './admin/order/order.component';
import { ProductsManageComponent } from './admin/products-manage/products-manage.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ShopProductComponent } from './shop/shop-product/shop-product.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import {LayoutModule} from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HotToastModule } from '@ngneat/hot-toast';
import { NewProductsComponent } from './admin/new-products/new-products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShopingCartComponent,
    UserProfileComponent,
    UserSttingComponent,
    UserOrderComponent,
    LoginComponent,
    SingUpComponent,
    UseManageOrderComponent,
    OrderComponent,
    ProductsManageComponent,
    AdminComponent,
    ShopProductComponent,
    HomeComponent,
    NotFoundComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    NewProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialCModule,
    LayoutModule,
    FlexLayoutModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
