import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { BookDeleteComponent } from './components/book-delete.component';
import { BookAddComponent } from './components/book-add.component';
import { BookEditComponent } from './components/book-edit.component';
import { BookComponent } from './components/book.component';
import { BookRoutingModule } from './book-routing.module';
@NgModule({
  declarations: [
    BookComponent,
    BookDeleteComponent,
    BookEditComponent,
    BookAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BookRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class BookModule { }
