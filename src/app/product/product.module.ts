import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';

// import { ProductDeleteComponent } from './components/product-delete.component';
// import { ProductAddComponent } from './components/product-add.component';
// import { ProductEditComponent } from './components/product-edit.component';
// import { ProductListComponent } from './components/product-list.component';
@NgModule({
  declarations: [
    
    // ProductDeleteComponent,
    // ProductAddComponent,
    // ProductEditComponent,
    // ProductListComponent,
  ],
  imports: [
    ProductRoutingModule,
    
    CommonModule,
    RouterModule
  ]
})
export class ProductModule { }
