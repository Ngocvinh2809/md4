import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './../templates/product-delete.component.html'
})
export class ProductDeleteComponent implements OnInit {

  //property id store id in memory
  id: any = 0;
  product!: Product;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    //get id from url
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id=id;
      this.product = this._ProductService.find(id);
    });
  }

  handleYes(){
    this._ProductService.destroy(this.id);
    //redirect to list
    this._Router.navigate(['/product']);
  }
  handleNo(){
    //redirect to list
    this._Router.navigate(['/product']);
  }


}
