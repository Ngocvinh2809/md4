import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
})
export class OutputComponent implements OnInit {

  constructor() { }
  @Output('appClick') appClick = new EventEmitter<any>();
  ngOnInit(): void {
  }
  childClick(value:any){
    //value: 123
    alert('childClick');
    this.appClick.emit(value);
  }
}
