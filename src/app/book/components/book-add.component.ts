import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './../templates/book-add.component.html',
})
export class BookAddComponent implements OnInit {
  bookForm!: FormGroup;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _BookService: BookService,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      price: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
    });
  }
  handleSubmit(): void {
    let formData = this.bookForm.value;
    // console.log(formData);

    let books: Book = {
      name: formData.name,
      price: formData.price,
    };
    this._BookService.save(books).subscribe(() => {
      // this.staffForm.reset();
      alert('Thêm sản phẩm thành công');
      this._Router.navigate(['/book']);
    },
      e => {
        console.log(e);
      })
  }
  
}
