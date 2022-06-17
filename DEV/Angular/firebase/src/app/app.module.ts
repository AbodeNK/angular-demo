import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
//module
import { MatComponentModule } from './mat-component.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FirebassTestComponent } from './firebass-test/firebass-test.component';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HotToastModule } from '@ngneat/hot-toast';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { getStorage } from 'firebase/storage';
import { provideStorage } from '@angular/fire/storage';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirebassTestComponent,
    LoginComponent,
    SingUpComponent,
    HomeComponent,
    NotFoundComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    MatComponentModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot()
    
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
