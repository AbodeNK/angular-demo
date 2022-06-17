import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-firebass-test',
  templateUrl: './firebass-test.component.html',
  styleUrls: ['./firebass-test.component.css']
})
export class FirebassTestComponent implements OnDestroy  {

  items1$:Observable<any[]>;

  // items1:Observable<any[]>;
  items$:Observable<any[]>;
  
  // subscription:Subscription
  constructor(private db:AngularFireDatabase){
     this.items$= db.list('/new').valueChanges();
     this.items1$= db.list('/courses').valueChanges();
    // this.subscription= db.list('/courses').valueChanges().subscribe(items=>{this.items=items
    //   console.log(this.items);
    // });
}
ngOnDestroy(): void {
  // this.subscription.unsubscribe();
}

add(course:HTMLInputElement){
  this.db.list('/new').push({
   key:course.value,
   price:200,
  //  isLive:true,
  //  sect:[
  //   {titel:'Components'},
  //   {titel:'Directives'},
  //   {titel:'Templete'}
  // ]

  });
  course.value='';

}
uptade(item:any,i:number){
  this.db.object('/new/'+i).set({key:item.key+'isUptade',
  price:'200',
})
  console.log(item);


}
delet(item:any,i:number){
  this.db.object('/new/'+i).remove().
  then(x=>console.log("isdetet"));
 


}
}
