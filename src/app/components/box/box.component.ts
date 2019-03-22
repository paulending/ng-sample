import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

// Box component shows basic information about product
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

  addToBasket(product: Product) {
    console.log(product);
  }
}
