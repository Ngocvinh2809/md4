import { Injectable } from '@angular/core';
import { Book } from './book';
import {Observable,of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interval } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
};
const apiUrl = 'http://127.0.0.1:8000/api/customers';

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
  find(id: any): Observable<Book> {
    return this.httpClient.get<Book>(`${apiUrl}/${id}`);
  } 
  save(books: Book): Observable<Book> {
    return this.httpClient.post<Book>(apiUrl, books);
  }
  update(id: any, books: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${apiUrl}/${id}`, books);
  }
  destroy(id: any): Observable<Book> {
    return this.httpClient.delete<Book>(`${apiUrl}/${id}`);
  }
}
