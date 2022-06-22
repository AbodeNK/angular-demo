import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';
import { UserDateService } from '../service/user-date.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output()
  readonly isDark = new EventEmitter<boolean>();
  @Input() deviceXS:boolean;
  @Input() deviceSM:boolean;
   user$ = this.userDate.userProfileDate;
  constructor(private authService:AuthServiceService,
    private router:Router,
    private userDate:UserDateService
    ) { }

  ngOnInit(): void {
  }
  isDarkModeSwitched({checked}:MatSlideToggleChange){
    this.isDark.emit(checked);
  }
  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['']);

    });
  }
}
