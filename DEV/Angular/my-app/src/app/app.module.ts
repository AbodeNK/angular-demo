import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceService } from './Service/service.service';
import { TestComponent } from './test/test.component';
import { TittelcasPipe } from './tittelcas.pipe';
import { TestPipePipe } from './-test-pipe.pipe';
import { NeuTestComponent } from './neu-test/neu-test.component';
import { Test2Component } from './test2/test2.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestComponent } from './http-test/http-test.component';
import { PostService } from './Service/post.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { FollowersComponent } from './followers/followers.component';
import { FollowersService } from './Service/followers.service';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AuthService } from './Service/auth.service';
// import { fakeBackendProvider } from './Service/fackBackend';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TittelcasPipe,
    TestPipePipe,
    NeuTestComponent,
    Test2Component,
    HttpTestComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    FollowersComponent,
    ProfileComponent,
    LoginComponent,
    AdminComponent,
    NoAccessComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component: HomeComponent},
      {path:'login',component: LoginComponent},
      {path:'admin',component: AdminComponent},
      {path:'noAccess',component: NoAccessComponent},
      {path:'callServis',component: HttpTestComponent},
      {path:'followers/:id/:username',component:ProfileComponent},
      {path:'followers',component:FollowersComponent},
      {path:'Forms',component:Test2Component},
      {path:'FirstAngularApp',component:TestComponent},
      {path:'**',component:NotFoundComponent},

    ]),
    
  ],
  providers: [
    ServiceService,
    PostService,
    FollowersService,
    AuthService,
    // fakeBackendProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
