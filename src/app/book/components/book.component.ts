import { Component, OnInit } from '@angular/core';
// import { Book } from './book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './../templates/book.component.html',
})
export class BookComponent implements OnInit {
  books:any;
  constructor(
    private _BookService:BookService
  ) { }
  
  ngOnInit(): void {
    this._BookService.getAll().subscribe(res => {
      this.books = res;
    });
  }
}
