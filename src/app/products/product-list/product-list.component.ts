import { Component, OnInit } from '@angular/core';

import { IProduct } from '../../shared/interfaces';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: [ './product-list.component.css' ]
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  errorMessage: string;
  products: IProduct[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll().subscribe(
      (products: IProduct[]) => this.products = products,
      (error: any) => this.errorMessage = <any>error
    );
  }
}
