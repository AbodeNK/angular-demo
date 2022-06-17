import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirebassTestComponent } from './firebass-test/firebass-test.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { canActivate,redirectLoggedInTo,redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectLogged = () => redirectUnauthorizedTo(['/login'])
const redirecthoem = ()=> redirectLoggedInTo([''])

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'user',component:UserProfileComponent,
    ...canActivate(redirectLogged)
  },
  {
    path:'login',component:LoginComponent,
    ...canActivate(redirecthoem)
  },
  {
    path:'firebassTest',component:FirebassTestComponent
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
