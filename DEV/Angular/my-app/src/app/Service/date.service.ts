import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  
 
  constructor(@Inject(String) private url:string,private http: HttpClient) { }
  getAll(){

    return this.http.get(this.url)
  }
  create(resours:HTMLElement){
    return this.http.post(this.url,JSON.stringify(resours))
  }
  patch(resours:HTMLElement,updat: string){
    
    return this.http.patch(this.url+'/'+resours.id,JSON.stringify({titel:''+updat+''}))
  }
  delete(resours:HTMLElement){
    return this.http.delete(this.url+'/'+resours.id)
    .pipe(catchError(this.erroHandler));
  }

  erroHandler(error: HttpErrorResponse) {
    return throwError( alert(error.message ));
    
  }

  
}
