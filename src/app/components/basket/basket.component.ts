import { Component, OnInit, Input } from '@angular/core';
import { Products, ProductsService } from 'src/app/services/products.service';
import { Store, select } from '@ngrx/store';
import { BasketState } from 'src/app/store/basket.state';
import { basketReducer } from 'src/app/store/basket.reducer';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  subscription: Subscription; // observable subscriptions
  products: Product[];

  constructor(private store: Store<BasketState>, private productsService: ProductsService) {
  }

  ngOnInit() {
    this.subscription = this.store.pipe(select('basketState')).subscribe(
      val => this.products = val.products
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // TODO: function for price formating
  totalPrice(products: Product[]): string {
    return "$" + products.reduce((tot, prod): number => { return tot + this.productsService.getPriceNum(prod.price) }, 0);
  }
}