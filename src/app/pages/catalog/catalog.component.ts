import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { subscribeOn } from 'rxjs/operators';

// Catalog component shows list of products, categories and filters
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {
  subscription: Subscription; // observable subscriptions

  products: Product[]; // array od product object

  priceMin: number; // current pricemin filter
  priceMax: number; // current pricemax filter

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    // TODO: load default values from products
    this.priceMin = 0;
    this.priceMax = 10;

    this.getProducts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getProducts(): void {
    this.subscription = this.productsService.getProducts().subscribe(
      products => this.products = products.filter(
        product => this.productsService.getPriceNum(product.price) > this.priceMin && this.productsService.getPriceNum(product.price) < this.priceMax
      )
    );
  }

  setFilter(priceMin: number, priceMax: number): void {
    this.priceMin = priceMin;
    this.priceMax = priceMax;

    this.subscription.unsubscribe();
    this.subscription = this.productsService.getProducts().subscribe(
      products => this.products = products.filter(
        product => this.productsService.getPriceNum(product.price) > this.priceMin && this.productsService.getPriceNum(product.price) < this.priceMax
      )
    );
  }
}
