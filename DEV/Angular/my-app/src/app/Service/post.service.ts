import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DateService {
 // private url='https://jsonplaceholder.typicode.com/posts';
 
  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts',http)
   }


  
}
