import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './components/book-add.component';
import { BookEditComponent } from './components/book-edit.component';
import { BookDeleteComponent } from './components/book-delete.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { BookComponent } from './components/book.component';

const routes: Routes = [
  {path: '', component: BookComponent},
  {path: 'add', component: BookAddComponent},
  {path: 'edit/:id', component: BookEditComponent},
  {path: 'delete/:id', component: BookDeleteComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
