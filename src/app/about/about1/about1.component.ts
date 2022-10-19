import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about1',
  templateUrl: './about1.component.html',
  styleUrls: ['./about1.component.css'],
})
export class About1Component implements OnInit {
  @Input() item: string = '';
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() ChaClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  ConClick(){
    this.ChaClick.emit();
  }

}
