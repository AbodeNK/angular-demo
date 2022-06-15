import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  getTest(){
    return["order1","order2","order3"];
  }
 constructor(private http:HttpClient) { }
 getOrders() { 
  return this.http.get('/api/orders')
    .pipe(map((response: any) => response.json()));
}
}
