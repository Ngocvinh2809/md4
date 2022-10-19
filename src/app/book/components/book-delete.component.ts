import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './../templates/book-delete.component.html',
})
export class BookDeleteComponent implements OnInit {
  id: any = 0;
  book!: Book;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _BookService:BookService,
    private _Router: Router
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      // console.log(id);
      this._BookService.find(id).subscribe((book) => {
        this.book = book;
        // console.log(staff.name);
        })
      })
  }
  
  handleYes(){
    this._BookService.destroy(this.id).subscribe(() => {
      this._Router.navigate(['/book']);
      alert('Xóa sản phẩm thành công');
    }, (e: any) => {
      console.log(e);
    })
    //redirect to list
  }
  handleNo(){
    //redirect to list
    this._Router.navigate(['/book']);
  }

}
