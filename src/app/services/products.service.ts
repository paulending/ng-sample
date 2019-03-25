import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, distinct } from 'rxjs/operators';

import { Product } from '../models/product';

export interface Products {
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  mockUrl = '/assets/mocks/products-mock.json';

  constructor(private http: HttpClient) { }

  // load products from mock file
  getProducts(): Observable<Product[]> {
    return this.http.get<Products>(this.mockUrl).pipe(
      map(res => res.products || []),
      catchError(error => throwError(error.message || error))
    );
  }

  // remove currency prom price
  getPriceNum(price: string): number {
    return Number(price.replace(/[^0-9.-]+/g, ''));
  }
}
