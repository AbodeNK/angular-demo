import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//componet
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { ZippyComponent } from './zippy/zippy.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialComponent } from './material/material.component';
import { DialogComponent, dilogDate } from './dialog/dialog.component';
import { MatComponenModule } from './mat-componen.module';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ZippyComponent,
    MaterialComponent,
    DialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    //material
    MatComponenModule
   
    
  ],
  providers: [
   {provide:dilogDate,useValue:{}}  

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
