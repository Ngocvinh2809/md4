import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html'
})
export class ProductAddComponent implements OnInit {

  productForm!: FormGroup;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      price: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
    });
  }

  handleSubmit():void {
    let formData = this.productForm.value;
    // console.log(formData);
    
    let product: Product = {
      name: formData.name,
      price: formData.price
  }
  // console.log(product);
  
  this._ProductService.save(product);
  this._Router.navigate(['/']);
}
}
