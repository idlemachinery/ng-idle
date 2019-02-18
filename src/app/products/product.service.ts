import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { GenericDataService } from 'ng-idle-http';

import { IProduct } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GenericDataService<IProduct> {

  constructor(http: HttpClient) {
    super(http);
    this.apiUrl = 'api/products';
  }

  saveProduct(product: IProduct): Observable<IProduct> {
    if (product.id === 0) {
      product.id = null;
      return this.create(product);
    }
    return this.update(product, product.id);
  }

  getProduct(id: number): Observable<IProduct> {
    if (id === 0) {
      return of(this.initializeProduct());
    }
    return this.get(id);
  }

  initializeProduct(): IProduct {
    return {
      id: 0,
      name: '',
      price: null,
      description: ''
    };
  }
}
