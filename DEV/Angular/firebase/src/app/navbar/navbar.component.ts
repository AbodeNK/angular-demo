import { Component, HostBinding, OnInit,Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output()
  readonly isDark = new EventEmitter<boolean>();
  
  user$ = this.usersService.currentUserProfile$;

  constructor(
    private authService:AuthenticationService,
    private router:Router,
    public usersService:UsersService,
    ) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['']);

    });
  }
  isDarkModeSwitched({checked}:MatSlideToggleChange){
    this.isDark.emit(checked);
  }


}

