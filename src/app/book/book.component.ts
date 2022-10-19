import { Component, OnInit } from '@angular/core';
import { BookService } from "./../book/book.service";
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
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
