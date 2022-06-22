import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDateService } from './user-date.service';
import { switchMap,map } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService implements CanActivate {
  constructor(private userDate:UserDateService,
    private authService:AuthServiceService,
    private router:Router ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>  {
      return this.userDate.userProfileDate.pipe(
      map(user=>user.isAdmin));

  }
}
