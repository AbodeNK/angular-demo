
import { Component, OnInit } from '@angular/core';
import { fade, slide } from '../animations/animation';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations:[
    fade,
    slide
  ]
})
export class TodosComponent  {

  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
  animationsDone($event){
    console.log('1');
  }
  animationsStart($event){
    console.log('2');
  }
}
