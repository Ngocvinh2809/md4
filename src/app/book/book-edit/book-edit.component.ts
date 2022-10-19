import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm!: FormGroup;
  id:any;
  book!:Book;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _BookService:BookService,
    private _Router: Router
  ) {}
  ngOnInit(): void {
    //lay id tu url xuong
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      let staff = this._BookService.find(id).subscribe(book => {
        this.bookForm = new FormGroup({
          name: new FormControl(book.name),
          price: new FormControl(book.price),
        });
      });
    });
  }
  handleSubmit():void {
    let BookData:Book = {
      name: this.bookForm.value.name,
      price: this.bookForm.value.price
    }
    this._BookService.update(this.id,BookData).subscribe(book => {
      alert('sửa thành công');
      this._Router.navigate(['/book']);
      });;

    //chuyen huong ve list

}

}
