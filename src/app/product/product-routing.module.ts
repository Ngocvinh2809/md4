import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './components/product-add.component';
import { ProductDeleteComponent } from './components/product-delete.component';
import { ProductEditComponent } from './components/product-edit.component';
import { ProductListComponent } from './components/product-list.component';
const routes: Routes = [
 
  {path: 'add', component: ProductAddComponent},
  {path: 'edit/:id', component: ProductEditComponent},
  {path: '', component: ProductListComponent},
  {path: 'delete/:id', component: ProductDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
