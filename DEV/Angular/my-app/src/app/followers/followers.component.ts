import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable,combineLatest } from 'rxjs';
import { FollowersService } from '../Service/followers.service';


@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  followers: any;

  constructor(
    private route:ActivatedRoute,
    private service:FollowersService) { }

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap,
    ]).subscribe(combined=>{
      let id= combined[0].get('id');
      let pege= combined[1].get('page');

      this.service.getAll().subscribe(responseType=> this.followers=responseType);

      console.log(pege+''+id);
    })

  }

}
