import { Injectable } from '@angular/core';
import { Book } from './book';
import {Observable,of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interval } from 'rxjs';

const observable = interval(1000);
const subscription = observable.subscribe(a=> console.log(a));

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
};
const apiUrl = 'https://634e78304af5fdff3a5d395b.mockapi.io/product/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(
    private httpClient:HttpClient
  ) {}
  getAll():Observable<Book[]>{
    return this.httpClient.get<Book[]>(apiUrl);
  }
  // books: Book[] = [];
  // getAll(): Book[] {
  //   return this.books;
  // }
  //lấy chi tiết
  // find(id: any): Book {
  //   return this.books[id];
  // }
  find(id: any): Observable<Book> {
    return this.httpClient.get<Book>(`${apiUrl}/${id}`);
  } 

  //luu
  // save(books: Book) {
  //   this.books.push(books);
  //   // let stringProducts = JSON.stringify(this.books);
  //   // window.localStorage.setItem('books',stringProducts);
  // }
  save(books: Book): Observable<Book> {
    return this.httpClient.post<Book>(apiUrl + '', books);
  }
  // update(idx: number, book: Book) {
  //   this.books[idx] = book;
  //   // let stringBooks = JSON.stringify(this.books);
  //   // window.localStorage.setItem('books',stringBooks);
  // }
  update(id: any, books: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${apiUrl}/${id}`, books);
  }
  // destroy(idx: number) {
  //   this.books.splice(idx, 1);
  //   // let stringBooks = JSON.stringify(this.books);
  //   // window.localStorage.setItem('books', stringBooks);
  // }
  destroy(id: any): Observable<Book> {
    return this.httpClient.delete<Book>(`${apiUrl}/${id}`);
  }
}
