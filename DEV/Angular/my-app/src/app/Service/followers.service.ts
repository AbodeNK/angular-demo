import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class FollowersService extends DateService {

  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/photos',http)
   }
}
