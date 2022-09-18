import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selct-filter',
  templateUrl: './selct-filter.component.html',
  styleUrls: ['./selct-filter.component.scss']
})
export class SelctFilterComponent implements OnInit {
  public variables2 = [{ id: 0, name: 'dus' }, { id: 1, name: 'dda' },{ id: 2, name: 'dawr' },
   { id:3, name: 'alpan' },{ id: 4, name: 'drw' }, 
  { id: 5, name: 'dgda' },
  { id: 6, name: 'dqad' }, { id: 9, name: 'abdulaa' },
  { id: 7, name: 'rqeadc' }, { id: 8, name: 'fyadq' },
  { id: 10, name: 'soheb' }, { id: 11, name: 'yes' },  {name: 'Bank A (Switzerland)', id: 'A'},
  {name: 'Bank B (Switzerland)', id: 'B'},
  {name: 'Bank C (France)', id: 'C'},
  {name: 'Bank D (France)', id: 'D'},
  {name: 'Bank E (France)', id: 'E'},
  {name: 'Bank F (Italy)', id: 'F'},
  {name: 'Bank G (Italy)', id: 'G'},
  {name: 'Bank H (Italy)', id: 'H'},
  {name: 'Bank I (Italy)', id: 'I'},
  {name: 'Bank J (Italy)', id: 'J'},
  {name: 'Bank Kolombia (United States of America)', id: 'K'},
  {name: 'Bank L (Germany)', id: 'L'},
  {name: 'Bank M (Germany)', id: 'M'},
  {name: 'Bank N (Germany)', id: 'N'},
  {name: 'Bank O (Germany)', id: 'O'},
  {name: 'Bank P (Germany)', id: 'P'},
  {name: 'Bank Q (Germany)', id: 'Q'},
  {name: 'Bank R (Germany)', id: 'R'}
];
  constructor() { }

  ngOnInit(): void {
  }
  public filteredList5 ;
  

}

