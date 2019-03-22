import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

// Catalog component shows list of products, categories and filters
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  $products: Observable<Product[]> = new Observable<Product[]>();

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.$products = this.productsService.getProducts();
  }
}
