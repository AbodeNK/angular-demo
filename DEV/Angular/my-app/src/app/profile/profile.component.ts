import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private route:Router ,private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.paramMap.subscribe(params=>{
     let id= params.get('id');
     console.log(id);
    })
    
  }
  submit(){
    this.route.navigate(['/followers'],{
      queryParams:{page:'1',order:'newest'},

    })


  }

}
