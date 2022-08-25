import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];
  constructor() {
    let old_products = window.localStorage.getItem('products');
    if( !old_products ){
      this.products = [];
      let stringProducts = JSON.stringify(this.products);
      window.localStorage.setItem('products',stringProducts);
    }else{
      this.products = JSON.parse(old_products);
    }
  }
  //lấy tất cả
  getAll(): Product[]{
    return this.products;
  }
  //lấy chi tiết
  find(idx:any): Product{
    return this.products[idx];
  }

   //luu
   save(product:Product){
    this.products.push(product);

    let stringProducts = JSON.stringify(this.products);
    window.localStorage.setItem('products',stringProducts);
  }
   //cap nhat
   update(idx:number,product:Product){
    this.products[idx] = product;
    let stringProducts = JSON.stringify(this.products);
    window.localStorage.setItem('products',stringProducts);
  }

  //xoa
  destroy(idx:number){
    this.products.splice(idx,1);
    let stringProducts = JSON.stringify(this.products);
    window.localStorage.setItem('products',stringProducts);
  }
}
