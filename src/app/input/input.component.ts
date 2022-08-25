import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
  @Input('image') image:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.image)
  }

}
