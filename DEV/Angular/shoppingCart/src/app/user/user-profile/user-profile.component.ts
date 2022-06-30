import { Component, OnInit } from '@angular/core';
import { UserDateService } from 'src/app/service/user-date.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user=this.userDataService.userProfileDate;
  constructor(private userDataService:UserDateService) { }

  ngOnInit(): void {
  }

}
