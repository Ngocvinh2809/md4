import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './../templates/product-list.component.html' 
})
export class ProductListComponent implements OnInit {

  products:Product[] = [];
  constructor(
    private _ProductService:ProductService
  ) { }

  ngOnInit(): void {
    this.products = this._ProductService.getAll();
    console.log(this.products);
  }

}
