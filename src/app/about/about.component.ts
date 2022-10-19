import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  items: string[] = [];
  currentItem: string = 'IPhone 12';
  ngOnInit(): void {}
  addItem(newItem: string) {
    this.items.push(newItem);
  }
  handleChaClick(){
    alert('Cha click');
  }

  constructor() {}
  a = '2020/10/11';
  b = {
    name: 'John',
    age: 18,
  };

  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }
  toggleFormat() {
    this.toggle = !this.toggle;
  }
}
