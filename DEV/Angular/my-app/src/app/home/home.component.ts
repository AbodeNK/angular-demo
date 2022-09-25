import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bin: string ="";
  dez: number;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  dezZuBin(value) {
    this.bin = "";
    if(!value)
    {
      this.bin = "";
      return;
    }
    if(value == 0)
    {
      this.bin +="0";
    }
    for(let i = value; i>=1;)
    {
      i = i / 2;
      if(i === +i && i === (i|0))
      {
        this.bin = "0"+this.bin;
      }
      else if(i === +i && i !== (i|0))
      { 
        i = i-0.5 ;
        this.bin =  "1"+this.bin;
      }
    }
  }
}
