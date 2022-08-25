import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  colSpan:number = 2;
  isDisabled:boolean = true;
  color:string = 'red';
  public name = 'vinh';
  public age = 22;
  public cars = ['Toyota', 'Honda'];
  public image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU8BJdGqomY3HkkNK4yk0BTQk093s-Z7xjqA&usqp=CAU';

  public tangtuoi(){
    this.age++;
  }
  public giamtuoi(){
    this.age--;
  }
  constructor() { }

  ngOnInit(): void {
  }

  applyColor(color:any): void{
    this.color = color;
  }
}
